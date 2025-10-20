import React from "react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#1e1e1e",
    color: "#f1f1f1",
    textAlign: "center",
    padding: "1.5rem 0",
    marginTop: "3rem",
    borderTop: "2px solid #444",
    fontFamily: "Poppins, sans-serif",
  };

  const footerContent = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
  };

  const footerLinks = {
    display: "flex",
    gap: "1.2rem",
    marginTop: "0.5rem",
  };

  const linkStyle = {
    color: "#f1f1f1",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  };

  const copyRight = {
    fontSize: "0.9rem",
    color: "#aaa",
    marginTop: "0.5rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContent}>
        <div style={footerLinks}>
          <a href="#about" style={linkStyle} onMouseOver={(e) => (e.target.style.color = "#00bcd4")} onMouseOut={(e) => (e.target.style.color = "#f1f1f1")}>
            About
          </a>
          <a href="#project" style={linkStyle} onMouseOver={(e) => (e.target.style.color = "#00bcd4")} onMouseOut={(e) => (e.target.style.color = "#f1f1f1")}>
            Projects
          </a>
          <a href="#contact" style={linkStyle} onMouseOver={(e) => (e.target.style.color = "#00bcd4")} onMouseOut={(e) => (e.target.style.color = "#f1f1f1")}>
            Contact
          </a>
        </div>
        <p style={copyRight}>
          © {new Date().getFullYear()} Ha Bao. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

