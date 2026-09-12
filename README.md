# SEAMAP-X

> **Low-Cost Deployable Seafloor Metal Detection Sensor for Ocean Resource Exploration**  
> **Smart India Hackathon (SIH 2026)** | **Problem Statement: 26064**  
> **Organization**: Ministry of Earth Sciences (MoES)  
> **Department**: National Centre for Polar and Ocean Research (NCPOR)  
> **Category**: Hardware | **Theme**: Robotics & Drones  

---

## 🌊 About the Project

Deep-sea mineral exploration requires expensive vessels, AUVs, ROVs, and specialized survey equipment. Identifying promising seabed regions during the initial stage of exploration can help reduce unnecessary detailed surveys.

**SEAMAP-X** is a low-cost deployable ocean-bottom sensing platform designed for rapid first-pass screening and spatial mapping of potential mineralized seabed zones.

---

## 🚀 Key Features & Innovations

- **Multi-Modal Sensing**: Active Electromagnetic (EM) induction + 3-Axis Magnetometer + Hydrostatic Environmental suite.
- **Detect → Rescan → Map**: Autonomous thresholding triggers verification rescan passes to generate 2D anomaly heatmaps.
- **Real-Time Embedded DSP**: STM32G474RE MCU executes synchronous demodulation and filtering directly onboard.
- **Low-Cost First-Pass Screening**: Economical screening approach to prioritize and reduce expensive vessel-based sweeps.
- **Underwater Acoustic Telemetry**: Pod → Acoustic Link → Surface Buoy → LoRa → Mothership Vessel.
- **Fail-Safe Recovery**: Timed galvanic release and acoustic ballast drop for reliable surface ascent.

---

## 🛠️ Signal Processing & Sensing Pipeline

```text
AD9833 DDS → MOSFET Driver → TX Coil → Seabed → RX Coil → INA828 LNA → Filters → ADS1256 ADC → STM32G474RE → Sensor Fusion → Anomaly Detection → Automatic Rescan → Mapping
```

### Auxiliary Sensors Suite
- **GY-271 / QMC5883L**: 3-Axis Magnetometer for magnetic anomaly detection.
- **MPU6050**: 6-DoF IMU for attitude compensation and stability monitoring.
- **Hydrostatic Pressure Sensor**: Depth & bathymetry tracking.
- **DS18B20**: Precision seawater temperature logging.
- **Conductivity Sensor**: Seawater background conductivity calibration.
- **Altitude Sensor**: Acoustic distance tracking above seafloor.

---

## 👥 Team & Mentors

### Project Team
- **BAKIRATHAN S** — Team Lead & Embedded Engineer
- **KAIUF M** — Software Engineer (Deep Learning & AI)
- **AKSHAYA GOMATHY M** — Hardware & Support Engineer

### Project Mentors
- **Mr. K. MUTHUSAMY** — Technical Competitions Head, Rathinam Technical Campus
- **Er. Gajendran Parthasarathi** — Head, School of Design and Innovation, Rathinam Technical Campus

---

## 💻 Tech Stack & Getting Started

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Modern CSS Design System
- **Icons**: Lucide React

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build
```

---

© 2026 SEAMAP-X Team. All rights reserved.
