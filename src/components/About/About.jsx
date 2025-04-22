import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcon} src={getImageUrl("about/ui.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I design and develop responsive, user-friendly interfaces using React.js, Next.js, Flutter, and Tailwind CSS—focused on accessibility and performance.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcon} src={getImageUrl("about/server.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I build robust and scalable backend systems using Node.js, Express, MongoDB, and Firebase with API integration and cloud deployment on AWS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcon} src={getImageUrl("about/cloud.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Developer</h3>
              <p>
              Skilled in building and deploying cloud-native applications using AWS (EC2, Lambda, S3), Docker, and Kubernetes to ensure scalability and reliability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcon} src={getImageUrl("about/ai.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>ML & AI Enthusiast</h3>
              <p>
              Proficient in crafting intelligent solutions using Python, Scikit-learn, XGBoost, and NumPy for real-world prediction and analysis.
              </p>              
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
