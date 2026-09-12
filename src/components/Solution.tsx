import React from 'react';
import {
  CheckCircle2,
  Waves,
  Magnet,
  Thermometer,
  Cpu,
  Search,
  RefreshCw,
  MapPin,
  Radio,
  Wifi,
  LifeBuoy
} from 'lucide-react';

export const Solution: React.FC = () => {
  const features = [
    { title: 'Electromagnetic sensing', desc: 'Active DDS transmitter coil & high-precision receiver coil for conductivity/resistivity profiling.', icon: <Waves size={20} /> },
    { title: 'Magnetic sensing', desc: '3-axis magnetometer for detecting ferromanganese crusts and magnetic susceptibility variations.', icon: <Magnet size={20} /> },
    { title: 'Environmental sensing', desc: 'Subsea depth pressure, conductivity, and temperature logging for ocean baseline calibration.', icon: <Thermometer size={20} /> },
    { title: 'Real-time signal processing', desc: 'Embedded DSP algorithms execute synchronous demodulation and filtering directly onboard.', icon: <Cpu size={20} /> },
    { title: 'Anomaly detection', desc: 'Autonomous edge thresholding identifies high-confidence mineralization signatures.', icon: <Search size={20} /> },
    { title: 'Automatic secondary rescan', desc: 'Dynamic state machine triggers confirmation passes to eliminate false alarms.', icon: <RefreshCw size={20} /> },
    { title: 'Seabed anomaly mapping', desc: 'Fuses acoustic altitude, IMU navigation, and sensory payload for 2D spatial maps.', icon: <MapPin size={20} /> },
    { title: 'Underwater acoustic communication', desc: 'Robust subsea acoustic modem telemetry linking seafloor pod to surface relay.', icon: <Radio size={20} /> },
    { title: 'Surface buoy + LoRa communication', desc: 'Long-range wireless uplink relaying processed survey telemetry to mothership vessel.', icon: <Wifi size={20} /> },
    { title: 'Fail-safe recovery', desc: 'Galvanic timed release and acoustic emergency ballast drop ensure reliable surface ascent.', icon: <LifeBuoy size={20} /> },
  ];

  return (
    <section id="solution" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">System Overview</span>
          <h2 className="section-title">Our Solution</h2>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <strong>SEAMAP-X</strong> is a low-cost deployable ocean-bottom sensing platform designed for rapid first-pass screening and spatial mapping of potential mineralized seabed zones.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid-2" style={{ gap: '20px' }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: '#f0f9ff',
                  color: '#0284c7',
                  border: '1px solid #bae6fd',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {feature.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <CheckCircle2 size={16} color="#0284c7" />
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>
                    {feature.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
