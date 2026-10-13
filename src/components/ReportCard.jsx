import React from 'react';

/**
 * Life Ka Report Card
 * Table evaluating Kaustya across life subjects, scrollable on mobile.
 */
export function ReportCard({ reportCard }) {
  return (
    <section id="report" className="section" aria-labelledby="report-title">
      <div className="content-container">
        <div className="section-title-wrap">
          <span className="section-tag">ANNUAL MARKSHEET</span>
          <h2 id="report-title" className="section-title">📋 Life Ka Report Card</h2>
          <p className="section-desc">
            Pradhanadhyapak aur Class Teacher dwara jaari kiya gaya aakhri marksheet. Mobile screens par scroll karke dekhein!
          </p>
        </div>

        <div className="report-card-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="stamp stamp-warning">
              STUDENT: KAUSTYA (ROLL NO: 420)
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              👉 Swipe horizontally on small screens
            </span>
          </div>

          <div className="report-table-scroll" tabIndex={0} aria-label="Life report card table with horizontal scroll">
            <table className="report-table">
              <thead>
                <tr>
                  <th scope="col">Subject / Skill</th>
                  <th scope="col">Marks</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Teacher's Strict Remark</th>
                </tr>
              </thead>
              <tbody>
                {reportCard.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 700 }}>{item.subject}</td>
                    <td style={{ fontFamily: 'var(--font-display)' }}>{item.marks}</td>
                    <td>
                      <span className={`grade-badge ${item.grade.includes('FAIL') ? 'grade-fail' : 'grade-pass'}`}>
                        {item.grade}
                      </span>
                    </td>
                    <td>{item.remark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-card-alt)', border: '2px dashed var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-pink)', fontSize: '1.1rem' }}>
                OVERALL RESULT: FAIL BUT PASSED BY SPECIAL KRIPA OF DOSTS
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Remarks: Aalsi aur kanjoos hai, par iske bina group mein maza nahi aata.
              </p>
            </div>
            <span className="stamp stamp-danger">
              PROMOTED TO NEXT YEAR 🎓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReportCard;
