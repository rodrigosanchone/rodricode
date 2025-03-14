"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Styles from "./nav.module.css";

const Nav: React.FC = () => {
  useEffect(() => {
    const iconoMenu = document.querySelector(
      "#content-icon"
    ) as HTMLElement | null;
    const a = document.querySelectorAll(".navLink") as NodeListOf<HTMLElement>;
    const btn_close = document.querySelector(
      ".content-close"
    ) as HTMLElement | null;
    const body = document.querySelector("body") as HTMLElement | null;

    const navegacionResponsive = () => {
      const navegacion = document.querySelector("#nav") as HTMLElement | null;
      if (navegacion && body) {
        navegacion.classList.toggle("mostrar");
        body.classList.add("content-y-hidden");
      }
    };

    const close = () => {
      const navegacion = document.querySelector("#nav") as HTMLElement | null;
      if (navegacion && body) {
        navegacion.classList.remove("mostrar");
        body.classList.remove("content-y-hidden");
      }
    };

    if (iconoMenu) {
      iconoMenu.addEventListener("click", navegacionResponsive);
    }
    a.forEach((enlace) => {
      enlace.addEventListener("click", close);
    });
    if (btn_close) {
      btn_close.addEventListener("click", close);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (iconoMenu) {
        iconoMenu.removeEventListener("click", navegacionResponsive);
      }
      a.forEach((enlace) => {
        enlace.removeEventListener("click", close);
      });
      if (btn_close) {
        btn_close.removeEventListener("click", close);
      }
    };
  }, []);

  return (
    <nav id="nav" className={Styles.nav}>
      <div className={Styles.contentClose} id="content-icon">
        <p>X</p>
      </div>
      <Link href="#" className={Styles.navLink}>
        Inicio
      </Link>
      <Link href="/#services" className={Styles.navLink}>
        Servicios
      </Link>
      <Link href="/#contact" className={Styles.navLink}>
        Contacto
      </Link>
    </nav>
  );
};

export default Nav;
