import React from "react";
import Styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={Styles.footer}>
      <div className={Styles.contentfooter}>
        <p>Rodrigo Sancho {currentYear}</p>
      </div>
    </footer>
  );
}
