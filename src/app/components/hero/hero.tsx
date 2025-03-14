"use client";
import React, { useEffect } from "react";
import Styles from "./hero.module.css";
import Logo from "../../../../public/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={Styles.hero} id="hero">
      <div className={Styles.text}>
        <h2>Hola</h2>
        <p>
          Soy un diseñador web radicado en Puntarenas, Costa Rica. Graduado del
          Instituto Nacional de Aprendizaje. Con experiencia en el diseño de
          blogs y paginas para comercios, con interfaces limpias y bien
          cuidadas. Ofrezco mi servicios con diferentes paquetes y precios muy
          económicos para pequeños y medianos negocios
        </p>
      </div>
      <div className={Styles.content_img} data-aos="fade-left">
        <img className={Styles.image} src={Logo.src} alt="" />
      </div>
    </div>
  );
}
