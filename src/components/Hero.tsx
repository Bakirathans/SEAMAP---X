import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      style={{
        padding: '56px 0 64px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="container">
        {/* Meta badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              backgroundColor: '#0284c7',
              color: '#ffffff',
              padding: '4px 14px',
              borderRadius: '9999px',
            }}
          >
            SIH 2026
          </span>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: '#f0f9ff',
              color: '#0369a1',
              border: '1px solid #bae6fd',
              padding: '4px 14px',
              borderRadius: '9999px',
            }}
          >
            Problem Statement: <strong>26064</strong>
          </span>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: '#f8fafc',
              color: '#334155',
              border: '1px solid #e2e8f0',
              padding: '4px 14px',
              borderRadius: '9999px',
            }}
          >
            MoES • NCPOR
          </span>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              backgroundColor: '#f8fafc',
              color: '#334155',
              border: '1px solid #e2e8f0',
              padding: '4px 14px',
              borderRadius: '9999px',
            }}
          >
            Hardware | Robotics & Drones
          </span>
        </div>

        {/* Center Headings */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 36px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            SEAMAP-X
          </h1>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 2.8vw, 1.7rem)',
              fontWeight: 600,
              color: '#0284c7',
              marginBottom: '20px',
              lineHeight: 1.35,
            }}
          >
            Low-Cost Deployable Seafloor Metal Detection Sensor for Ocean Resource Exploration
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#475569',
              lineHeight: 1.65,
              maxWidth: '740px',
              margin: '0 auto 28px',
            }}
          >
            "A low-cost deployable seabed sensing platform for first-pass detection and mapping of potential mineralized zones."
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#solution" className="btn btn-primary">
              Explore Our Solution <ArrowRight size={18} />
            </a>
            <a href="#technical-approach" className="btn btn-outline">
              Technical Architecture
            </a>
          </div>
        </div>

        {/* Hero Image / Model Showcase Box */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
          }}
        >
          <div
            className="image-box"
            style={{
              height: '420px',
              backgroundColor: '#0f172a',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid #e2e8f0',
            }}
          >
            <img
              src="/images/seamap-pod.jpg"
              alt="SEAMAP-X Underwater Pod"
              onError={(e) => {
                // Fallback to svg if jpg not found
                e.currentTarget.src = '/images/seamap-pod.svg';
              }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderTop: 'none',
              borderRadius: '0 0 var(--radius-md) var(--radius-md)',
              fontSize: '0.85rem',
              color: '#64748b',
            }}
          >
            <span><strong>Figure 1.0:</strong> SEAMAP-X Autonomous Geophysical Seabed Pod</span>
            <span>Scale: 1:1 Deployable Model</span>
          </div>
        </div>
      </div>
    </section>
  );
};
