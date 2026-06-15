import React from "react";
import Styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={Styles.footer}>
      <div className={Styles.inner}>
        <p className={Styles.brand}>RODRICODE</p>
        <nav className={Styles.links}>
          <Link href="/#hero">Inicio</Link>
          <Link href="/#services">Servicios</Link>
          <Link href="/#contact">Contacto</Link>
        </nav>
        <p className={Styles.copy}>
          © {currentYear} Rodrigo Sancho. Puntarenas, Costa Rica.
        </p>
      </div>
    </footer>
  );
}
