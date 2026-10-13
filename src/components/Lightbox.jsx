import React, { useEffect, useRef } from 'react';

/**
 * Mobile-first accessible Lightbox component with swipe gestures & Esc key
 */
export function Lightbox({ photos, currentIndex, onClose, onPrev, onNext }) {
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  const currentPhoto = photos[currentIndex] || photos[0];

  // Esc key listener and background scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, onPrev, onNext]);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isSwipeLeft = distance > 50;
    const isSwipeRight = distance < -50;

    if (isSwipeLeft) onNext();
    if (isSwipeRight) onPrev();

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Evidence Lightbox"
      onClick={onClose}
    >
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-header">
          <span className="lightbox-counter">
            📷 EVIDENCE {currentIndex + 1} OF {photos.length}
          </span>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close Lightbox (Esc)"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        <div
          className="lightbox-image-stage"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt || currentPhoto.caption}
            className="lightbox-image"
          />
        </div>

        <div className="lightbox-caption-box">
          <p>{currentPhoto.caption}</p>
        </div>

        <div className="lightbox-controls">
          <button
            type="button"
            className="btn btn-yellow"
            onClick={onPrev}
            aria-label="Previous Exhibit"
          >
            ◀ PEECHE (PREV)
          </button>
          <button
            type="button"
            className="btn btn-pink"
            onClick={onNext}
            aria-label="Next Exhibit"
          >
            AAGE (NEXT) ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
