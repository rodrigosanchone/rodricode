"use client";

import React, { useEffect } from "react";
import Styles from "./Header.module.css";

import Link from "next/link";

const Nav: React.FC = () => {
  const navegacionResponsive = () => {
    const navegacion = document.querySelector("#nav") as HTMLElement | null;
    const body = document.querySelector("body") as HTMLElement | null;
    if (navegacion && body) {
      navegacion.classList.toggle(Styles.mostrar);
      body.classList.add(Styles.contentYHidden);
    }
  };

  const close = () => {
    const navegacion = document.querySelector("#nav") as HTMLElement | null;
    const body = document.querySelector("body") as HTMLElement | null;
    if (navegacion && body) {
      navegacion.classList.remove(Styles.mostrar);
      body.classList.remove(Styles.contentYHidden);
    }
  };

  useEffect(() => {
    const a = document.querySelectorAll(".navLink") as NodeListOf<HTMLElement>;
    const btn_close = document.querySelector(
      ".contentClose"
    ) as HTMLElement | null;

    a.forEach((enlace) => {
      enlace.addEventListener("click", close);
    });
    if (btn_close) {
      btn_close.addEventListener("click", close);
    }

    // Cleanup event listeners on component unmount
    return () => {
      a.forEach((enlace) => {
        enlace.removeEventListener("click", close);
      });
      if (btn_close) {
        btn_close.removeEventListener("click", close);
      }
    };
  }, []);

  return (
    <>
      <header className={Styles.header}>
        <h1>RODRICODE</h1>
        <div id="contentIcon" onClick={navegacionResponsive}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9933cc"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="40"
            height="40"
            strokeWidth="1.5"
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </div>
      </header>
      <nav id="nav" className={Styles.nav}>
        <div className={Styles.contentClose} onClick={close}>
          <p>X</p>
        </div>
        <Link href="#" className={Styles.navLink} onClick={close}>
          Inicio
        </Link>
        <Link href="/#services" className={Styles.navLink} onClick={close}>
          Servicios
        </Link>
        <Link href="/#contact" className={Styles.navLink} onClick={close}>
          Contacto
        </Link>
      </nav>
    </>
  );
};

export default Nav;
