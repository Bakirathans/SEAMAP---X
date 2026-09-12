import React from 'react';

export const TechnicalApproach: React.FC = () => {
  const signalChain = [
    { name: 'AD9833 DDS', type: 'Signal Gen' },
    { name: 'MOSFET Driver', type: 'Power Amp' },
    { name: 'TX Coil', type: 'Transmitter' },
    { name: 'Seabed', type: 'Target Media' },
    { name: 'RX Coil', type: 'Receiver' },
    { name: 'INA828 LNA', type: 'Low-Noise Amp' },
    { name: 'Filters', type: 'Bandpass Filter' },
    { name: 'ADS1256 ADC', type: '24-Bit ADC' },
    { name: 'STM32G474RE', type: 'Processing MCU' },
    { name: 'Sensor Fusion', type: 'Algorithm' },
    { name: 'Anomaly Detection', type: 'Thresholding' },
    { name: 'Automatic Rescan', type: 'Verification' },
    { name: 'Mapping', type: '2D Output' },
  ];

  const sensors = [
    {
      name: 'GY-271 / QMC5883L',
      type: '3-Axis Magnetometer',
      role: 'Measures localized magnetic field anomalies and dipole moments of ferromanganese deposits.',
      image: '/images/sensors/gy271.jpg',
      fallback: '/images/sensors/gy271.svg',
    },
    {
      name: 'MPU6050',
      type: '6-DoF IMU & Orientation',
      role: 'Monitors pod tilt, roll, and dynamic motion to apply attitude compensation to sensor readings.',
      image: '/images/sensors/mpu6050.jpg',
      fallback: '/images/sensors/mpu6050.svg',
    },
    {
      name: 'Pressure Sensor',
      type: 'Hydrostatic Depth Sensor',
      role: 'Continuous ocean-depth tracking and bathymetric vertical level logging.',
      image: '/images/sensors/pressure.jpg',
      fallback: '/images/sensors/pressure.svg',
    },
    {
      name: 'DS18B20',
      type: 'Digital Temperature Sensor',
      role: 'High accuracy seawater temperature compensation for electromagnetic conductivity models.',
      image: '/images/sensors/ds18b20.jpg',
      fallback: '/images/sensors/ds18b20.svg',
    },
    {
      name: 'Conductivity Sensor',
      type: 'Salinity / Water Properties',
      role: 'Calibrates background seawater conductivity for accurate baseline subtraction.',
      image: '/images/sensors/conductivity.jpg',
      fallback: '/images/sensors/conductivity.svg',
    },
    {
      name: 'Altitude Sensor',
      type: 'Acoustic Seabed Distance',
      role: 'Maintains steady near-bottom altitude above seafloor to ensure consistent signal calibration.',
      image: '/images/sensors/altitude.jpg',
      fallback: '/images/sensors/altitude.svg',
    },
  ];

  return (
    <section id="technical-approach" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Architecture & Pipeline</span>
          <h2 className="section-title">Technical Approach</h2>
          <p className="section-subtitle">
            A synchronous electromagnetic induction and multi-sensor fusion pipeline designed for embedded real-time execution.
          </p>
        </div>

        {/* Clean Flow Diagram Card */}
        <div className="card" style={{ marginBottom: '40px', padding: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
              Signal Processing & Sensing Flow Diagram
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              End-to-end signal propagation from waveform synthesis to 2D seabed mapping.
            </p>
          </div>

          <div className="flow-diagram-container">
            <div className="flow-diagram">
              {signalChain.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div
                    className={`flow-step ${
                      step.name === 'Seabed'
                        ? 'highlight-secondary'
                        : step.name === 'STM32G474RE' || step.name === 'Mapping'
                        ? 'highlight'
                        : ''
                    }`}
                  >
                    <div>{step.name}</div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.8, marginTop: '2px', fontWeight: 400 }}>
                      {step.type}
                    </div>
                  </div>
                  {idx < signalChain.length - 1 && (
                    <span className="flow-arrow">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', textAlign: 'right', marginTop: '8px' }}>
            ← Scroll horizontally to view complete chain →
          </div>
        </div>

        {/* Embedded Sensor Suite List */}
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '20px',
            }}
          >
            Auxiliary Sensors Suite
          </h3>

          <div className="grid-3">
            {sensors.map((sensor, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '16px',
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '8px',
                    backgroundColor: '#0f172a',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1px solid var(--border-light)',
                  }}
                >
                  <img
                    src={sensor.image}
                    alt={sensor.name}
                    onError={(e) => {
                      e.currentTarget.src = sensor.fallback;
                    }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#0284c7',
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}
                  >
                    {sensor.type}
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                    {sensor.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.4 }}>
                    {sensor.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
