import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'Technical Approach', href: '#technical-approach' },
    { label: 'Innovation in Action', href: '#innovation-in-action' },
    { label: 'Impact & Benefits', href: '#impact' },
    { label: 'Team', href: '#team' },
    { label: 'Mentors', href: '#mentors' },
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        borderBottom: isScrolled ? '1px solid #cbd5e1' : '1px solid #e2e8f0',
        boxShadow: isScrolled ? '0 2px 10px rgba(15, 23, 42, 0.06)' : 'none',
        transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
      }}
    >
      {/* Top Ministry & SIH announcement bar */}
      <div
        style={{
          backgroundColor: '#0f172a',
          color: '#e2e8f0',
          fontSize: '0.8rem',
          padding: '6px 0',
          borderBottom: '1px solid #1e293b',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>SIH 2026</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span>Problem Statement: <strong>26064</strong></span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Ministry of Earth Sciences (MoES)</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span>National Centre for Polar and Ocean Research (NCPOR)</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
          }}
        >
          {/* Logo & Tagline */}
          <a
            href="#home"
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
                border: '1px solid #bae6fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
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
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  color: '#0f172a',
                  lineHeight: 1.1,
                }}
              >
                SEAMAP-X
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#0284c7',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Sense • Map • Explore
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '22px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#334155',
                  transition: 'color 0.2s ease',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0284c7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '16px 0 20px',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#f8fafc',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
