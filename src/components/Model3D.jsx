import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * Animated 3D Showcase for Kaustya's GLB Avatar
 * Features:
 * - Smooth auto-rotation and levitating / bobbing floating animation
 * - Interactive mouse / touch orbit dragging (rotate & tilt)
 * - Dynamic lighting (warm studio key, cool fill, and colored party rim light)
 * - Interactive animation modes: Chill, Party Dance, Turbo Spin
 * - Loading progress indicator
 * - Auto-cleanup of Three.js resources on unmount
 */
export function Model3D() {
  const containerRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [mode, setMode] = useState('dance'); // 'chill', 'dance', 'turbo'

  // Refs for animation loop
  const modeRef = useRef('dance');
  modeRef.current = mode;

  const modelRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 480;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 3.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfff6d6, 2.2);
    mainLight.position.set(3, 4, 3);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0x3a86ff, 1.2);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xff2e88, 2.8, 10);
    rimLight.position.set(0, -2, 2);
    scene.add(rimLight);

    const goldLight = new THREE.PointLight(0xffd400, 2.0, 10);
    goldLight.position.set(2, 2, -2);
    scene.add(goldLight);

    // 3. Load GLB Model
    const loader = new GLTFLoader();
    let loadedModel = null;
    let initialY = 0;

    loader.load(
      './kaustya_3d.glb',
      (gltf) => {
        loadedModel = gltf.scene;
        modelRef.current = loadedModel;

        // Auto-center and fit model size
        const box = new THREE.Box3().setFromObject(loadedModel);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const scale = 1.9 / maxDim;
        loadedModel.scale.set(scale, scale, scale);

        // Center on X and Z, set bottom slightly down
        loadedModel.position.x = -center.x * scale;
        loadedModel.position.y = -center.y * scale - 0.1;
        loadedModel.position.z = -center.z * scale;
        initialY = loadedModel.position.y;

        // Enhance materials
        loadedModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              child.material.roughness = 0.55;
              child.material.metalness = 0.1;
            }
          }
        });

        scene.add(loadedModel);
        setIsLoaded(true);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const percent = Math.round((xhr.loaded / xhr.total) * 100);
          setLoadingProgress(percent);
        } else {
          setLoadingProgress((prev) => Math.min(prev + 10, 95));
        }
      },
      (error) => {
        console.error('Error loading 3D model:', error);
        setLoadError('3D Model load error. Reload to retry.');
      }
    );

    // 4. Mouse / Touch Drag Interaction
    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = {
        x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0].clientY) || 0
      };
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current || !modelRef.current) return;

      const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      const deltaX = currentX - previousMousePositionRef.current.x;
      const deltaY = currentY - previousMousePositionRef.current.y;

      modelRef.current.rotation.y += deltaX * 0.01;
      modelRef.current.rotation.x = Math.max(
        -0.4,
        Math.min(0.4, modelRef.current.rotation.x + deltaY * 0.005)
      );

      previousMousePositionRef.current = { x: currentX, y: currentY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    dom.addEventListener('touchstart', onMouseDown, { passive: true });
    window.addEventListener('touchmove', onMouseMove, { passive: true });
    window.addEventListener('touchend', onMouseUp);

    // 5. Animation Loop
    let animFrameId = null;
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      if (loadedModel) {
        const currentMode = modeRef.current;

        // Speeds based on interactive mode
        let rotSpeed = 0.01;
        let floatFreq = 2.0;
        let floatAmp = 0.06;

        if (currentMode === 'chill') {
          rotSpeed = 0.004;
          floatFreq = 1.2;
          floatAmp = 0.03;
        } else if (currentMode === 'dance') {
          rotSpeed = 0.022;
          floatFreq = 3.0;
          floatAmp = 0.09;
        } else if (currentMode === 'turbo') {
          rotSpeed = 0.07;
          floatFreq = 4.5;
          floatAmp = 0.12;
        }

        // Apply auto-rotation if user is not actively dragging
        if (!isDraggingRef.current) {
          loadedModel.rotation.y += rotSpeed;
        }

        // Levitation / Floating Bobbing animation
        loadedModel.position.y = initialY + Math.sin(elapsed * floatFreq) * floatAmp;

        // Subtle head tilt / dance wobble
        if (currentMode === 'dance' || currentMode === 'turbo') {
          loadedModel.rotation.z = Math.sin(elapsed * 2.5) * 0.05;
        } else {
          loadedModel.rotation.z = 0;
        }

        // Party light pulse
        rimLight.intensity = 2.5 + Math.sin(elapsed * 3) * 1.5;
        goldLight.intensity = 2.0 + Math.cos(elapsed * 2.5) * 1.0;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 6. Responsive Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Cleanup
    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);

      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      dom.removeEventListener('touchstart', onMouseDown);
      window.removeEventListener('touchmove', onMouseMove);
      window.removeEventListener('touchend', onMouseUp);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      scene.clear();
    };
  }, []);

  const handleReset = () => {
    if (modelRef.current) {
      modelRef.current.rotation.x = 0;
      modelRef.current.rotation.y = 0;
      modelRef.current.rotation.z = 0;
    }
    setMode('dance');
  };

  return (
    <section id="model3d" className="section" aria-labelledby="model3d-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">3D METAVERSE AVATAAR</span>
          <h2 id="model3d-title" className="section-title">🕺 Kaustya Live In 3D</h2>
          <p className="section-desc">
            Directly from AI 3D scan: Kaustya ka interactive 3D avataar! Mouse ya ungli se ghuma kar 360° view dekhein!
          </p>
        </div>

        <div className="model3d-wrapper">
          {/* Stamps around the canvas */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span className="stamp stamp-danger">🎮 TOUCH & DRAG TO ROTATE</span>
            <span className="stamp stamp-warning">✨ 100% ASLI KAUSTYA SCAN</span>
            <span className="stamp stamp-success">🎵 ANIMATED PARTY DANCE</span>
          </div>

          {/* 3D Canvas Container */}
          <div className="model3d-canvas-box">
            {!isLoaded && !loadError && (
              <div className="model3d-loader" role="status" aria-live="polite">
                <span className="stamp stamp-warning" style={{ fontSize: '1.1rem' }}>
                  ⏳ 3D KAUSTYA LOAD HO RAHA HAI...
                </span>
                <div className="model3d-progress-bar">
                  <div className="model3d-progress-fill" style={{ width: `${loadingProgress}%` }} />
                </div>
                <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-ink)' }}>
                  {loadingProgress}% Loaded (20 MB High Quality Mesh)
                </p>
              </div>
            )}

            {loadError && (
              <div className="model3d-error">
                <p>⚠️ {loadError}</p>
              </div>
            )}

            <div
              ref={containerRef}
              className="model3d-canvas-stage"
              style={{ cursor: 'grab' }}
              title="Click and drag to rotate Kaustya in 3D"
            />
          </div>

          {/* Animation Controls Row */}
          <div className="model3d-controls-row">
            <button
              type="button"
              className={`btn ${mode === 'dance' ? 'btn-pink' : 'btn-white'}`}
              onClick={() => setMode('dance')}
              aria-label="Set animation to Party Dance"
            >
              🕺 PARTY DANCE
            </button>

            <button
              type="button"
              className={`btn ${mode === 'chill' ? 'btn-teal' : 'btn-white'}`}
              onClick={() => setMode('chill')}
              aria-label="Set animation to Chill Mode"
            >
              🧘 CHILL SLOW
            </button>

            <button
              type="button"
              className={`btn ${mode === 'turbo' ? 'btn-yellow' : 'btn-white'}`}
              onClick={() => setMode('turbo')}
              aria-label="Set animation to Turbo Spin"
            >
              🚀 TURBO SPIN
            </button>

            <button
              type="button"
              className="btn btn-white"
              onClick={handleReset}
              aria-label="Reset 3D camera and rotation"
            >
              🔄 RESET VIEW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model3D;
