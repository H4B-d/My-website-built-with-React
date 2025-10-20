import React from "react";
import "./Contact.module.css";

export default function Contact() {
  const contacts = [
    {
      label: "Gmail",
      value: "habao25092004@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=habao25092004@gmail.com",
    },
    { label: "GitHub", value: "H4B-d", href: "https://github.com/H4B-d" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/ha-bao/",
      href: "https://www.linkedin.com/in/ha-bao/",
    },
    { label: "Phone", value: "0938844560" },
  ];

  return (
    <section id="contact" className="contactSection">
      <h2>📫 Contact</h2>
      {contacts.map((c, idx) => (
        <p key={idx} className="contactItem">
          <strong>{c.label}:</strong>{" "}
          {c.href ? (
            <a href={c.href} target="_blank" rel="noreferrer">
              {c.value}
            </a>
          ) : (
            c.value
          )}
        </p>
      ))}
    </section>
  );
}



