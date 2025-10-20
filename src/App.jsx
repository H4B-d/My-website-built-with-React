/*App.jsx*/
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import WeatherWidget from "./components/WeatherWidget";
import ExchangeWidget from "./components/ExchangeWidget";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <About />
        <section id="widgets" className={styles.widgetsSection}>
        <h2>💻 Widget</h2>
          <div className={styles.widgetsRow}>
            <div className={styles.widgetContainer}>
              <WeatherWidget />
            </div>
          <div className={styles.widgetContainer}>
              <ExchangeWidget />
          </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


