import React from "react";
import myImage from "../assets/IMG.jpg";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about">
      <h2>👋 About me</h2>
      <div className={styles.aboutContainer}>
        <img src={myImage} alt="My portrait" className={styles.avatar} />
        <div className={styles.aboutText}>
          <p>Hello friends! You're in <strong>Ha Bao's personal spot.</strong></p>
          <p>I'm Bao Gia Ha.</p>
          <p>Currently, I'm a 4th-year student at University of Science, VNU-HCM, majoring in Physics.</p>
          <p>My interests include applied math, physics, programming, data science, and machine learning.</p>
          <p>Feel free to explore my spot here!</p>
        </div>
      </div>
    </section>
  );
}



