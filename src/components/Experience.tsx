import React from 'react';
import NagalLogo from '../assets/nagal-logo.png';
import FunigualdadhLogo from '../assets/funigualdadh-logo.jpg';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experiencia</h2>

      <div className="card">
        <img src={NagalLogo} alt="Grupo Nagal S.A.S" className="company-logo" />
        <h3>Grupo Nagal S.A.S</h3>
        <span className="period">Mayo 2024 – Actualidad</span>
        <ul>
          <li>Desarrollo de apps móviles desde cero con Flutter y Dart</li>
          <li>Migración y modernización de aplicaciones a Flutter</li>
          <li>Creación de librerías de componentes reutilizables en TSX y Stencil</li>
          <li>Consumo de APIs REST y sincronización con sistemas CRM</li>
          <li>Implementación de cargas masivas y sincronización de datos</li>
        </ul>
      </div>

      <div className="card">
        <img src={FunigualdadhLogo} alt="Fundación FUNIGUALDADH" className="company-logo" />
        <h3>Fundación FUNIGUALDADH</h3>
        <span className="period">Marzo 2024 – Julio 2024</span>
        <ul>
          <li>Mantenimiento y desarrollo de sitios con Astro y React</li>
          <li>Optimización de rendimiento, accesibilidad y UX/UI</li>
          <li>Soporte técnico y ajustes funcionales</li>
          <li>Elaboración de manuales de usuario y documentación técnica</li>
          <li>Revisión y recomendaciones de mejora de proyectos web</li>
        </ul>
      </div>
    </section>
  );
}
