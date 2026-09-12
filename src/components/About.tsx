import React from 'react';
import { AlertCircle, DollarSign, Target, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Background & Challenge</span>
          <h2 className="section-title">About the Problem</h2>
          <p className="section-subtitle">
            Addressing high costs and operational bottlenecks in early-stage deep-sea mineral exploration.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Left Column: Image */}
          <div>
            <div
              className="image-box"
              style={{
                height: '360px',
              }}
            >
              <img
                src="/images/seabed-exploration.jpg"
                alt="Seabed Mineral Exploration Challenge"
                onError={(e) => {
                  e.currentTarget.src = '/images/seabed-exploration.svg';
                }}
              />
            </div>
            <div
              style={{
                padding: '10px 14px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-light)',
                borderTop: 'none',
                borderRadius: '0 0 var(--radius-md) var(--radius-md)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
              }}
            >
              <strong>Figure 2.0:</strong> Conventional high-cost deep-sea exploration workflow vs targeted sensing
            </div>
          </div>

          {/* Right Column: Problem Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="card" style={{ borderLeft: '4px solid #ef4444' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ color: '#ef4444', marginTop: '2px' }}>
                  <AlertCircle size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    High Cost & Vessel Dependency
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
                    Deep-sea mineral exploration requires expensive vessels, AUVs, ROVs and specialized survey equipment running at massive daily charter costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ color: '#f59e0b', marginTop: '2px' }}>
                  <Target size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    Need for First-Pass Screening
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6 }}>
                    Identifying promising seabed regions during the initial stage of exploration can help reduce unnecessary detailed surveys over unmineralized ocean floors.
                  </p>
                </div>
              </div>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #0284c7', backgroundColor: '#f0f9ff' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ color: '#0284c7', marginTop: '2px' }}>
                  <Compass size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>
                    The SEAMAP-X Objective
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6 }}>
                    SEAMAP-X addresses this challenge through a <strong>low-cost deployable geophysical sensing pod</strong> capable of autonomous anomaly detection and spatial mapping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
