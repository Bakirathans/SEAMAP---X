import React from 'react';
import { Compass, DollarSign, Cpu, Globe2, Check } from 'lucide-react';

export const Impact: React.FC = () => {
  const categories = [
    {
      title: 'Exploration',
      icon: <Compass size={22} />,
      badgeColor: '#0284c7',
      bullets: [
        'Rapid first-pass seabed screening',
        'Potential anomaly identification',
        'Spatial mapping',
      ],
    },
    {
      title: 'Economic',
      icon: <DollarSign size={22} />,
      badgeColor: '#059669',
      bullets: [
        'Low-cost screening approach',
        'Helps prioritize expensive detailed surveys',
        'Modular architecture',
      ],
    },
    {
      title: 'Technical',
      icon: <Cpu size={22} />,
      badgeColor: '#d97706',
      bullets: [
        'EM + magnetic sensing',
        'Real-time processing',
        'Automatic rescan',
      ],
    },
    {
      title: 'Strategic',
      icon: <Globe2 size={22} />,
      badgeColor: '#7c3aed',
      bullets: [
        'Supports indigenous ocean technology',
        'Potential multi-pod deployment',
        'Supports ocean-resource exploration',
      ],
    },
  ];

  return (
    <section id="impact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Significance</span>
          <h2 className="section-title">Impact & Benefits</h2>
          <p className="section-subtitle">
            Delivering cost efficiency, technological sovereignty, and targeted ocean resource exploration.
          </p>
        </div>

        <div className="grid-4">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--border-light)',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#f8fafc',
                    color: cat.badgeColor,
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                  {cat.title}
                </h3>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {cat.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: '#f0f9ff',
                        color: '#0284c7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.45 }}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
