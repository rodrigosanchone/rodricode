"use client";
import React, { useEffect } from "react";
import Styles from "./hero.module.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <section className={Styles.hero} id="hero">
      <div className={Styles.inner}>
        <div className={Styles.text} data-aos="fade-up">
          <p className={Styles.eyebrow}>
            Diseño & Desarrollo Web · Puntarenas, CR
          </p>
          <h1 className={Styles.titulo}>
            Tu negocio merece
            <br />
            una web a la altura
          </h1>
          <p className={Styles.descripcion}>
            Sitios modernos, rápidos y bien cuidados. Con experiencia en diseño
            de blogs y páginas para comercios, ofrezco interfaces limpias con
            precios accesibles para pequeñas y medianas empresas.
          </p>
          <div className={Styles.ctas}>
            <Link href="/#services" className="btn">
              Ver planes
            </Link>
            <Link href="/#contact" className="btn-outline">
              Contáctame
            </Link>
          </div>
        </div>

        <div
          className={Styles.imgWrap}
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img
            className={Styles.imagen}
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop"
            alt="Diseño y desarrollo web"
          />
        </div>
      </div>

      {/* Stats */}
      <div className={Styles.stats} data-aos="fade-up" data-aos-delay="300">
        <div className={Styles.stat}>
          <span className={Styles.statNum}>4</span>
          <span className={Styles.statLabel}>Planes disponibles</span>
        </div>
        <div className={Styles.statDivider} />
        <div className={Styles.stat}>
          <span className={Styles.statNum}>$150</span>
          <span className={Styles.statLabel}>Desde USD</span>
        </div>
        <div className={Styles.statDivider} />
        <div className={Styles.stat}>
          <span className={Styles.statNum}>100%</span>
          <span className={Styles.statLabel}>Responsive</span>
        </div>
      </div>
    </section>
  );
}
