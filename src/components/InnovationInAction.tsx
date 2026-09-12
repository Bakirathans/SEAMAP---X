import React from 'react';

export const InnovationInAction: React.FC = () => {
  const steps = [
    'Research Vessel',
    'SEAMAP-X Pod',
    'Seabed',
    'EM + Magnetic Sensing',
    'Anomaly Detection',
    'Mapping',
    'Surface Buoy',
    'Research Vessel',
  ];

  return (
    <section id="innovation-in-action" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Deployment & Workflow</span>
          <h2 className="section-title">Our Innovation in Action</h2>
          <p className="section-subtitle">
            Closed-loop ocean deployment lifecycle from mothership launch to surface relay and topside mapping.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'center', gap: '36px' }}>
          {/* Left Column: Sequence Diagram & Description */}
          <div>
            <div className="card" style={{ marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
                Deployment Operational Sequence
              </h3>
              
              <div className="vertical-flow">
                {steps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="v-step">
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: idx === 0 || idx === steps.length - 1 ? '#0f172a' : '#0284c7',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          flexShrink: 0,
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                    {idx < steps.length - 1 && (
                      <span className="v-arrow">↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #bae6fd',
                borderLeft: '4px solid #0284c7',
                padding: '16px 20px',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <p style={{ fontSize: '1rem', color: '#1e293b', fontStyle: 'italic', lineHeight: 1.6 }}>
                "The pod collects geophysical and environmental measurements near the seabed. Processed information is used to identify potential anomaly zones and support targeted detailed exploration."
              </p>
            </div>
          </div>

          {/* Right Column: Deployment Diagram / Image */}
          <div>
            <div
              className="image-box"
              style={{
                height: '480px',
              }}
            >
              <img
                src="/images/deployment-architecture.jpg"
                alt="Deployment and Telemetry Flow"
                onError={(e) => {
                  e.currentTarget.src = '/images/deployment-architecture.svg';
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
              <strong>Figure 3.0:</strong> Subsea acoustic and surface RF LoRa telecommunications architecture
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
