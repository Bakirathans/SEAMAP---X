import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0f172a',
        color: '#f8fafc',
        padding: '56px 0 32px',
        borderTop: '3px solid #0284c7',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {/* Logo & Tagline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid #38bdf8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="/images/logo.jpeg"
                alt="SEAMAP-X Logo"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                color: '#ffffff',
              }}
            >
              SEAMAP-X
            </div>
          </div>

          <div
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#38bdf8',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Sense • Map • Explore
          </div>

          <div
            style={{
              maxWidth: '600px',
              fontSize: '0.95rem',
              color: '#94a3b8',
              lineHeight: 1.6,
            }}
          >
            Low-Cost Deployable Seafloor Metal Detection Sensor for Ocean Resource Exploration
          </div>

          {/* SIH details */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '0.85rem',
              color: '#cbd5e1',
              backgroundColor: '#1e293b',
              padding: '8px 20px',
              borderRadius: '9999px',
              border: '1px solid #334155',
              marginTop: '8px',
            }}
          >
            <span>SIH 2026</span>
            <span style={{ color: '#64748b' }}>|</span>
            <span>Problem Statement: <strong>26064</strong></span>
            <span style={{ color: '#64748b' }}>|</span>
            <span>MoES • NCPOR</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid #1e293b',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <div>
            © 2026 SEAMAP-X Team. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: '#1e293b',
              border: '1px solid #334155',
              color: '#cbd5e1',
              padding: '6px 14px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0284c7';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1e293b';
              e.currentTarget.style.color = '#cbd5e1';
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
