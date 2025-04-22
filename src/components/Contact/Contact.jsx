import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactSection}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p className={styles.neonGlow}>Let’s connect and build something amazing together!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:s.chinthala04@gmail.com">s.chinthala04@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/shreya-chinthala-0a7030292/">
              linkedin.com/in/shreya-chinthala
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href="https://github.com/ShreyAC962">github.com/ShreyAC962</a>
          </li>
        </ul>
      </div>

      <div className={styles.certificationsSection}>
        <h2>Certifications & Roles</h2>
        <ul className={styles.certList}>
          <li><strong>AWS Certified Solutions Architect – Associate</strong></li>
          <li>NPTEL: <strong>The Joy of Computing using Python</strong></li>
          <li><strong>Technical Seminar Presenter:</strong> Real-Time Patient Monitoring System using IoT</li>
          <li><strong>Campus Executive – SkillVertex:</strong> Led technical workshops and student skill development</li>
          <li><strong>Campus Ambassador – Acmegrade:</strong> Organized technical & professional events</li>
        </ul>
      </div>
    </footer>
  );
};
