import React from 'react';

export default function Hero() {
  return (
    <header className="hero">
      <img src="/avatar.png" alt="Juan José Chinchilla" className="hero-avatar" />
      <h1>Juan José Chinchilla Lanziano</h1>
      <p>Desarrollador Frontend y Móvil</p>
      <div className="cta-buttons">
        <a href="#projects">Ver Portafolio</a>
        <a href="/CV-JuanChinchilla.pdf" download>Descargar CV</a>
      </div>
    </header>
  );
}
