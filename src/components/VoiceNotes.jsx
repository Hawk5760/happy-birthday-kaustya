import React, { useState, useRef, useEffect } from 'react';

/**
 * Voice Notes Component
 * Custom audio controls ensuring only one audio plays at any time.
 * If the voiceNotes list is empty, the entire section safely hides itself!
 */
export function VoiceNotes({ voiceNotes = [] }) {
  const [playingId, setPlayingId] = useState(null);
  const audioRef = useRef(null);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Section hides itself if list is empty
  if (!voiceNotes || voiceNotes.length === 0) {
    return null;
  }

  const handleTogglePlay = (note) => {
    if (playingId === note.id) {
      // Pause current
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setPlayingId(null);
    } else {
      // Stop previous playing audio
      if (audioRef.current) {
        audioRef.current.pause();
      }

      const audio = new Audio(note.src);
      audioRef.current = audio;
      setPlayingId(note.id);

      audio.play().catch(() => {
        // Handle browser autoplay rejection
        setPlayingId(null);
      });

      audio.onended = () => {
        setPlayingId(null);
      };
    }
  };

  return (
    <section id="voice" className="section" aria-labelledby="voice-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">WIRETAP TAPES</span>
          <h2 id="voice-title" className="section-title">🎙️ Secret Voice Notes</h2>
          <p className="section-desc">
            Forensic lab dwara baramad kiye gaye confidential voice recordings. Play button dabayein aur sachai sunein!
          </p>
        </div>

        <div className="voice-notes-list">
          {voiceNotes.map((note) => {
            const isPlaying = playingId === note.id;

            return (
              <div key={note.id} className="voice-note-card">
                <div className="voice-note-info">
                  <span className="stamp stamp-warning" style={{ alignSelf: 'flex-start', fontSize: '0.75rem', padding: '0.15rem 0.5rem', marginBottom: '0.25rem' }}>
                    {note.tag || 'Audio Evidence'}
                  </span>
                  <h3 className="voice-note-title">{note.label}</h3>
                  <span className="voice-note-meta">⏱️ Duration: {note.duration || '0:05'}</span>
                </div>

                <button
                  type="button"
                  className="voice-play-btn"
                  onClick={() => handleTogglePlay(note)}
                  aria-label={isPlaying ? `Pause ${note.label}` : `Play ${note.label}`}
                  title={isPlaying ? 'Pause Audio' : 'Play Audio'}
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VoiceNotes;
