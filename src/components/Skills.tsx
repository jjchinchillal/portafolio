import React from 'react';
import { FaFilter, FaReact, FaDatabase, FaLock, FaNetworkWired } from 'react-icons/fa';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Habilidades</h2>

      <div className="skill-group">
        <FaFilter className="skill-icon" /><span>Flutter & Dart</span>
        <FaReact className="skill-icon" /><span>React, TypeScript, Astro, Stencil</span>
      </div>
      <div className="skill-group">
        <FaDatabase className="skill-icon" /><span>PostgreSQL, MySQL, MongoDB, Firebase, Supabase</span>
      </div>
      <div className="skill-group">
        <FaLock className="skill-icon" /><span>Ciberseguridad</span>
        <FaNetworkWired className="skill-icon" /><span>Redes (CCNA)</span>
      </div>
      <div className="skill-group">
        <span>Gestión de proyectos ágiles</span>
        <span>Documentación técnica</span>
        <span>Inteligencia Artificial básica</span>
      </div>
    </section>
  );
}
