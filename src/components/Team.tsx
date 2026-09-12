import React from 'react';
import { Shield, Code2, Wrench } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'BAKIRATHAN S',
      role: 'Team Lead & Embedded Engineer',
      domain: 'Project Planning & Systems Integration',
      icon: <Shield size={16} />,
      image: '/images/Bakirathan.jpeg',
      fallback: '/images/team-placeholder.svg',
    },
    {
      name: 'KAIUF M',
      role: 'Software Engineer',
      domain: 'Deep Learning & AI',
      icon: <Code2 size={16} />,
      image: '/images/kaiuf.jpg',
      fallback: '/images/team-placeholder.svg',
    },
    {
      name: 'AKSHAYA GOMATHY M',
      role: 'Hardware & Support Engineer',
      domain: 'Hardware Integration & Sensor Testing',
      icon: <Wrench size={16} />,
      image: '/images/akshaya.jpg',
      fallback: '/images/team-placeholder.svg',
    },
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Innovators</span>
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Multidisciplinary engineering team developing the SEAMAP-X deep-sea exploration platform for SIH 2026.
          </p>
        </div>

        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px',
          }}
        >
          {teamMembers.map((member, idx) => (
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
              {/* Avatar Photo */}
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f5f9',
                  border: '3px solid #bae6fd',
                  overflow: 'hidden',
                  marginBottom: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    e.currentTarget.src = member.fallback;
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              </div>

              {/* Role Badge */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: '#f0f9ff',
                  color: '#0284c7',
                  border: '1px solid #bae6fd',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  marginBottom: '12px',
                }}
              >
                {member.icon}
                {member.role}
              </span>

              {/* Member Name */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: '6px',
                  letterSpacing: '0.01em',
                }}
              >
                {member.name}
              </h3>

              {/* Domain Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  lineHeight: 1.5,
                }}
              >
                {member.domain}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
