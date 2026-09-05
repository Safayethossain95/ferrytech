/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { API_URL, Only_Frontend } from "../../../../config";
import axios from "axios";
import {
  servicesmainAPI,
  serviceMetrics,
  serviceProcessSteps,
} from "../../../../utils/servicesApi";

const ServiceMainComp = (props) => {
  const isMobile = props.version === "mobile";

  const frontendMainText =
    "Ensuring optimum uptime for your equipment is your topmost priority on site. Ferrytech works to help you achieve it through our integrated service capability. Our in-depth understanding of engineering technologies, certified technicians and engineers, infrastructure readiness, and rapid turnaround keep your equipment performing at peak reliability. Ferrytech provides end-to-end lifecycle solutions: reducing downtime, boosting operational efficiency, extending equipment life, and minimizing overall operative costs.";

  const [maintext, setMainText] = useState(frontendMainText);
  const data = props.myprops && props.myprops.length > 0 ? props.myprops : servicesmainAPI;

  useEffect(() => {
    async function fetchMainText() {
      try {
        if (!Only_Frontend) {
          const res = await axios.get(`${API_URL}/serviceMaintextget`);
          if (res?.data?.data?.[0]?.mainText) {
            // Clean up any trailing debug words if present
            const cleanText = res.data.data[0].mainText.replace(/frontend\.?$/i, "").trim();
            setMainText(cleanText || frontendMainText);
          }
        }
      } catch (err) {
        console.log("Using default services text:", err.message);
      }
    }
    fetchMainText();
  }, []);

  return (
    <div className={`servicemaincomp ${isMobile ? "mobile-view" : "desktop-view"}`}>
      {/* 1. Modern Hero Section */}
      <section className="services-hero-section">
        <div className="services-container">
          <motion.div
            className="hero-header-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge-wrap">
              <span className="hero-badge">RAPID SERVICE FORCE</span>
              <span className="hero-tagline">24/7 LIFECYCLE SUPPORT</span>
            </div>
            <h1 className="hero-main-title">
              Engineering Services & <br className="d-none d-md-block" />
              <span>Optimum Uptime Guarantee</span>
            </h1>
            <p className="hero-main-desc">{maintext}</p>
          </motion.div>

          {/* 4 Quick Metrics Cards */}
          <div className="metrics-grid">
            {serviceMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                className="metric-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-desc">{metric.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Detailed Service Offerings (Alternating Cards) */}
      <section className="services-list-section">
        <div className="services-container">
          <div className="section-header-wrap">
            <span className="sub-title-badge">WHAT WE DO</span>
            <h2 className="section-heading">Our Core Service Divisions</h2>
            <p className="section-subtext">
              Turnkey engineering solutions tailored for ports, heavy industries, power facilities, and container handling terminals.
            </p>
          </div>

          <div className="services-items-wrap">
            {data.map((item, index) => {
              const isFlipped = item.flip !== undefined ? item.flip : index % 2 === 1;
              const itemNumber = item.number || `0${index + 1}`;
              const itemTag = item.tag || "Engineering Solution";
              const itemSubtitle =
                item.subtitle ||
                "Specialized technical execution adhering to international safety standards.";

              return (
                <motion.div
                  key={item.id || index}
                  className={`service-item-row ${isFlipped ? "row-reverse" : ""}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Visual Image Column */}
                  <div className="service-img-col">
                    <div className="service-img-frame">
                      <div className="img-overlay-number">{itemNumber}</div>
                      <img src={item.img} alt={item.subheading} loading="lazy" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="service-text-col">
                    <div className="service-card-meta">
                      <span className="service-num-badge">{itemNumber}</span>
                      <span className="service-category-tag">{itemTag}</span>
                    </div>

                    <h3 className="service-title">{item.subheading}</h3>
                    <p className="service-subtitle">{itemSubtitle}</p>

                    {item.summary && <p className="service-summary">{item.summary}</p>}

                    {/* Capabilities Checkmark List */}
                    <div className="service-capabilities-wrap">
                      <h4 className="capabilities-heading">Key Capabilities & Scope:</h4>
                      <ul className="capabilities-list">
                        {item.mylist &&
                          item.mylist.map((point, pIdx) => (
                            <li key={pIdx} className="capability-item">
                              <span className="check-icon">✓</span>
                              <span className="point-text">{point}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Engineering Delivery Process (4 Steps) */}
      <section className="services-process-section">
        <div className="services-container">
          <div className="section-header-wrap light-theme">
            <span className="sub-title-badge">STRUCTURED WORKFLOW</span>
            <h2 className="section-heading">How We Deliver Zero-Downtime</h2>
            <p className="section-subtext">
              A systematic 4-phase methodology from initial diagnosis to 24/7 lifecycle management.
            </p>
          </div>

          <div className="process-grid">
            {serviceProcessSteps.map((proc, pIndex) => (
              <motion.div
                key={pIndex}
                className="process-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: pIndex * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="process-step-num">{proc.step}</div>
                <h4 className="process-title">{proc.title}</h4>
                <p className="process-desc">{proc.desc}</p>
                <div className="process-accent-bar" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SLA & 24/7 Rapid Response Assurance Callout */}
      <section className="services-cta-banner">
        <div className="services-container">
          <div className="cta-banner-card">
            <div className="cta-text-content">
              <span className="cta-tag">DIRECT TECHNICAL CONSULTATION</span>
              <h3 className="cta-heading">Need Emergency Support or an AMC Contract?</h3>
              <p className="cta-desc">
                Our Rapid Service Force is on standby with specialized equipment, certified engineers, and ready access to OEM spare parts.
              </p>
            </div>
            <div className="cta-action-wrap">
              <a href="#reqaquote" className="cta-btn-primary">
                Request Service Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceMainComp;