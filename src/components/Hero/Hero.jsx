import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>👋 Hi, I'm Shreya Chinthala</h1>
        <p className={styles.description}>
        A passionate Software Engineer with a Master’s in Computer Science and Engineering from 🎓 Santa Clara University.

💻 I specialize in building responsive, scalable applications using React, Node.js, Flutter, and AWS ☁️.

📱 With hands-on experience in educational apps, 🤖 AI-powered dashboards, and cloud-based systems, I bring a user-focused 🧑‍💻 and data-driven 📊 approach to development.

🎯 My academic background in AI, Machine Learning, and Cloud Architecture, combined with real-world frontend and backend experience, enables me to deliver impactful, seamless solutions 🚀.
<br></br>      
<p className={styles.neonGlow}>
        Feel free to contact me to learn more about my work.
      </p>      
        </p>
        <a href="mailto:s.chinthala04@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    
    </section>
  );
};
