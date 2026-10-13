import React, { useState, useEffect, useRef } from 'react';

/**
 * Meme Maker
 * Lets users pick Kaustya's photo, add top/bottom punchlines, renders with Impact/Bowlby One
 * with black stroke and white fill, auto-fitting text, and instant PNG download.
 */
export function MemeMaker({ photos }) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [topText, setTopText] = useState('BHAI 5 MINUTE MEIN');
  const [bottomText, setBottomText] = useState('PAHUNCH RAHA HOON');

  const canvasRef = useRef(null);

  // Render canvas whenever inputs change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = photos[selectedPhotoIndex]?.src || './photos/photo1.jpg';

    img.onload = () => {
      // Set canvas dimensions based on image aspect ratio
      const maxWidth = 600;
      const scale = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scale;

      // Draw image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Helper to draw meme text
      const drawMemeText = (text, y, isTop) => {
        if (!text.trim()) return;

        const upperText = text.toUpperCase();
        // Dynamic auto-fitting font size
        let fontSize = Math.floor(canvas.width / 12);
        ctx.font = `900 ${fontSize}px 'Bowlby One', Impact, sans-serif`;

        // Measure text and shrink if too wide
        while (ctx.measureText(upperText).width > canvas.width - 40 && fontSize > 16) {
          fontSize -= 2;
          ctx.font = `900 ${fontSize}px 'Bowlby One', Impact, sans-serif`;
        }

        ctx.textAlign = 'center';
        ctx.textBaseline = isTop ? 'top' : 'bottom';

        // Black stroke outline
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(4, Math.floor(fontSize / 8));
        ctx.lineJoin = 'miter';
        ctx.miterLimit = 2;
        ctx.strokeText(upperText, canvas.width / 2, y);

        // White fill
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(upperText, canvas.width / 2, y);
      };

      // Top text (padding 20px from top)
      drawMemeText(topText, 20, true);

      // Bottom text (padding 20px from bottom)
      drawMemeText(bottomText, canvas.height - 20, false);
    };
  }, [selectedPhotoIndex, topText, bottomText, photos]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `kaustya-birthday-meme.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section id="meme" className="section" aria-labelledby="meme-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">CUSTOM DESI POSTER</span>
          <h2 id="meme-title" className="section-title">🎨 Kaustya Meme Maker</h2>
          <p className="section-desc">
            Apni marzi ki photo chunein, desi punchlines dalein, aur high-quality meme download karke WhatsApp pe viral karein!
          </p>
        </div>

        <div className="meme-maker-box">
          {/* Photo Picker */}
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              CHOOSE EXHIBIT PHOTO:
            </label>
            <div className="meme-photo-picker" role="radiogroup" aria-label="Select photo for meme">
              {photos.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`meme-thumb-btn ${selectedPhotoIndex === idx ? 'active' : ''}`}
                  onClick={() => setSelectedPhotoIndex(idx)}
                  aria-label={`Select Exhibit ${idx + 1}`}
                >
                  <img src={p.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Text Inputs */}
          <div className="meme-inputs-grid">
            <div className="meme-input-group">
              <label htmlFor="meme-top">TOP TEXT (UPAR KA PUNCHLINE):</label>
              <input
                id="meme-top"
                type="text"
                className="meme-input-text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                maxLength={40}
                placeholder="TOP TEXT"
              />
            </div>

            <div className="meme-input-group">
              <label htmlFor="meme-bottom">BOTTOM TEXT (NEECHE KA PUNCHLINE):</label>
              <input
                id="meme-bottom"
                type="text"
                className="meme-input-text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                maxLength={40}
                placeholder="BOTTOM TEXT"
              />
            </div>
          </div>

          {/* Canvas Rendering Preview */}
          <div className="meme-canvas-wrapper">
            <canvas ref={canvasRef} className="meme-canvas" />
          </div>

          {/* Download Action */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="btn btn-yellow"
              onClick={handleDownload}
              style={{ fontSize: '1.1rem', padding: '0.85rem 2rem' }}
            >
              📥 DOWNLOAD MEME PNG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemeMaker;
