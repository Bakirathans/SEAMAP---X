import React from 'react';
import { Award } from 'lucide-react';

export const Mentors: React.FC = () => {
  const mentors = [
    {
      name: 'Mr. K. MUTHUSAMY',
      designation: 'Technical Competitions Head',
      department: 'Rathinam Technical Campus',
      image: '/images/mentor-1.jpg',
      fallback: '/images/mentor-placeholder.svg',
    },
    {
      name: 'Er. Gajendran Parthasarathi',
      designation: 'Head - School of Design and Innovation',
      department: 'Rathinam Technical Campus',
      image: '/images/mentor-2.jpg',
      fallback: '/images/mentor-placeholder.svg',
    },
  ];

  return (
    <section id="mentors" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Academic & Technical Advisory</span>
          <h2 className="section-title">Our Mentors</h2>
          <p className="section-subtitle">
            Providing technical guidance, oceanographic research insights, and project mentorship.
          </p>
        </div>

        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {mentors.map((mentor, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                textAlign: 'center',
                padding: '28px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f5f9',
                  border: '3px solid #bae6fd',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  onError={(e) => {
                    e.currentTarget.src = mentor.fallback;
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: '#f0fdf4',
                  color: '#16a34a',
                  border: '1px solid #bbf7d0',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  marginBottom: '10px',
                }}
              >
                <Award size={14} />
                Project Mentor
              </div>

              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '4px',
                }}
              >
                {mentor.name}
              </h3>

              <div
                style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: '#0284c7',
                  marginBottom: '4px',
                }}
              >
                {mentor.designation}
              </div>

              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                }}
              >
                {mentor.department}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
