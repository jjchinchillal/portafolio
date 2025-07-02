import React from 'react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';

const orbitIcons = {
  small: [
    'html.png',
    'css.png',
    'js.png',
    'tsx.png',
  ],
  medium: [
    'react.png',
    'vite.png',
    'flutter.png',
    'android.png',
    'dart.png',
  ],
  large: [
    'php.png',
    'mysql.png',
    'mongodb.png',
    'postgresql.png',
    'supabase.png',
    'vercel.png',
  ],
};

export default function Hero() {
  // Generador de íconos distribuidos por ángulo
  const renderOrbitIcons = (icons: string[], radius: number) => {
    const angleStep = 360 / icons.length;
    return icons.map((icon, index) => {
      const angle = index * angleStep;
      return (
        <span
          key={index}
          className="orbit-icon"
          style={{
            transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            backgroundImage: `url('/icons/${icon}')`,
          }}
        />
      );
    });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Dev Juan</div>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobremi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="icons">
          <a href="https://github.com/TU_USUARIO" target="_blank" rel="noopener noreferrer">
            <FaGithub className="floating-icon" size={20} />
          </a>
          <a href="https://wa.me/57TUNUMERO" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="floating-icon" size={20} />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <div className="avatar-wrapper">
          <img src="/avatar.jpeg" alt="Juan José Chinchilla" className="hero-avatar" />

          {/* Primera órbita */}
          <div className="orbit-ring small">
            {renderOrbitIcons(orbitIcons.small, 120)}
          </div>

          {/* Segunda órbita */}
          <div className="orbit-ring medium">
            {renderOrbitIcons(orbitIcons.medium, 150)}
          </div>

          {/* Tercera órbita */}
          <div className="orbit-ring large">
            {renderOrbitIcons(orbitIcons.large, 180)}
          </div>
        </div>

        <h1>Juan José Chinchilla Lanziano</h1>
        <p>Desarrollador Frontend y Móvil</p>
        <div className="cta-buttons">
          <a href="#proyectos">Ver Portafolio</a>
          <a href="/CV-JuanChinchilla.pdf" download>Descargar CV</a>
        </div>
      </header>
    </div>
  );
}
