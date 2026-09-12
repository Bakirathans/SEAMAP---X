import React from 'react';
import { Layers, Scan, Cpu, DollarSign, Radio, ShieldCheck } from 'lucide-react';

export const Innovation: React.FC = () => {
  const innovations = [
    {
      number: '01',
      title: 'Multi-Modal Sensing',
      desc: 'EM + Magnetic + Environmental sensors integrated into a synchronized low-noise acquisition architecture.',
      icon: <Layers size={24} />,
    },
    {
      number: '02',
      title: 'Detect → Rescan → Map',
      desc: 'Anomalies are detected, rechecked with localized rescan passes, and plotted into 2D anomaly heatmaps.',
      icon: <Scan size={24} />,
    },
    {
      number: '03',
      title: 'Real-Time Processing',
      desc: 'STM32 processes sensor data onboard with digital filtering and baseline cancellation in real time.',
      icon: <Cpu size={24} />,
    },
    {
      number: '04',
      title: 'Low-Cost Deployment',
      desc: 'Designed as a simpler, economical first-pass screening platform to replace expensive blind survey sweeps.',
      icon: <DollarSign size={24} />,
    },
    {
      number: '05',
      title: 'Underwater Communication',
      desc: 'Pod → Acoustic Link → Surface Buoy → LoRa → Vessel communication pipeline for immediate topside telemetry.',
      icon: <Radio size={24} />,
    },
    {
      number: '06',
      title: 'Fail-Safe Recovery',
      desc: 'Emergency ballast release and timed buoyancy activation ensure 100% reliable vehicle recovery.',
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <section id="innovation" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Key Innovations</span>
          <h2 className="section-title">Our Innovation</h2>
          <p className="section-subtitle">
            Novel engineering principles enabling robust, cost-effective subsea geophysical prospecting.
          </p>
        </div>

        <div className="grid-3">
          {innovations.map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '8px',
                      backgroundColor: '#f0f9ff',
                      color: '#0284c7',
                      border: '1px solid #bae6fd',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#cbd5e1',
                    }}
                  >
                    CARD {idx + 1}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#475569',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
