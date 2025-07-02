
import React from 'react';
import './App.css';
import { colors } from './theme/colors';

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Juan José Chinchilla</h1>
        <p>Desarrollador Frontend y Móvil</p>
        <div className="cta-buttons">
          <a href="#projects">Ver Portafolio</a>
          <a href="/CV-JuanChinchilla.pdf" download>Descargar CV</a>
        </div>
      </header>

      <section id="about" className="section">
        <h2>Sobre Mí</h2>
        <p>
          Estudiante de Ingeniería de Sistemas con experiencia en desarrollo web y móvil.
          Apasionado por la tecnología y el aprendizaje continuo. Experto en Flutter, Dart,
          TypeScript y React.
        </p>
      </section>

      <section id="experience" className="section">
        <h2>Experiencia</h2>
        <div className="card">
          <h3>Grupo Nagal S.A.S (2024 - Actualidad)</h3>
          <ul>
            <li>Desarrollo de apps móviles con Flutter y Dart</li>
            <li>Consumo de APIs REST y modernización de sistemas</li>
            <li>Creación de componentes reutilizables con Stencil</li>
          </ul>
        </div>
        <div className="card">
          <h3>Fundación FUNIGUALDADH (2024)</h3>
          <ul>
            <li>Mantenimiento de sitios con Astro y React</li>
            <li>Optimización de rendimiento y accesibilidad</li>
            <li>Documentación técnica y soporte</li>
          </ul>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Habilidades</h2>
        <p><strong>Lenguajes:</strong> Dart, Java, PHP, TypeScript, JavaScript, HTML, CSS</p>
        <p><strong>Frameworks:</strong> Flutter, Astro, Stencil, React</p>
        <p><strong>Bases de datos:</strong> PostgreSQL, MongoDB, Supabase, Firebase</p>
        <p><strong>Otros:</strong> APIs REST, Ciberseguridad, Redes (CCNA), IA, Gestión de proyectos</p>
      </section>

      <section id="projects" className="section">
        <h2>Proyectos</h2>
        <div className="card">
          <h3>App Gestión Empresarial</h3>
          <p>Aplicación móvil con Flutter y Firebase para sincronización de datos empresariales en tiempo real.</p>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contacto</h2>
        <p>Email: jchinchilla1204@gmail.com</p>
        <p>Teléfono: +57 311 775 9027</p>
      </section>
    </div>
  );
}
