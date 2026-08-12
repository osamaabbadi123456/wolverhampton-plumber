"use client";

import { motion } from "framer-motion";
import styles from "../emergency-plumber-wolverhampton/EmergencyPage.module.css";

const flow = [
  { n: "01", label: "Pick issue" },
  { n: "02", label: "Add area" },
  { n: "03", label: "Attach photo" },
  { n: "04", label: "Send enquiry" },
];

const services = ["Leak", "Drain", "Tap", "Pressure"];

export function HomeVideoFrame() {
  return (
    <div className={styles.v20HeroScene} aria-label="Animated plumbing enquiry scene">
      <motion.div
        className={`${styles.v20BgLayer} ${styles.v20BgOne}`}
        animate={{ opacity: [1, 1, 0, 0, 1], scale: [1, 1.05, 1.02, 1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${styles.v20BgLayer} ${styles.v20BgTwo}`}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [1.03, 1, 1.055, 1.02, 1.03] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={styles.v20Shade} />
      <div className={styles.v20LightSweep} />

      <motion.div
        className={styles.v20MainPanel}
        animate={{ y: [18, 0, 0, -8, 18], opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className={styles.v20PanelTop}>
          <span />
          <strong>Clear plumbing enquiry</strong>
        </div>

        <div className={styles.v20FlowGrid}>
          {flow.map((item, index) => (
            <motion.div
              className={styles.v20FlowItem}
              key={item.label}
              animate={{ y: [0, -4, 0], opacity: [0.74, 1, 0.74] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.32 }}
            >
              <small>{item.n}</small>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.v20PhotoDeck}
        animate={{ x: [34, 0, 0, -8, 34], opacity: [0, 1, 1, 1, 0], rotate: [2, 0, 0, -1, 2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
      >
        <div className={styles.v20PhotoBack} />
        <div className={styles.v20PhotoMid} />
        <div className={styles.v20PhotoFront}>
          <span />
          <span />
        </div>
      </motion.div>

      <motion.div
        className={styles.v20ServiceRibbon}
        animate={{ y: [24, 0, 0, -6, 24], opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        {services.map((service, index) => (
          <motion.span
            key={service}
            animate={{ scale: [1, 1.035, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.22 }}
          >
            {service}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className={styles.v20WhatsApp}
        animate={{ y: [16, 0, 0, -6, 16], opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
      >
        <div className={styles.v20Pulse} />
        <div>
          <strong>WhatsApp</strong>
          <span>+44 7405 955956</span>
        </div>
      </motion.div>
    </div>
  );
}
