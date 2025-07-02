import React from 'react';
/* import EnterpriseAppThumb from '../assets/enterprise-app-thumb.png';
 */
export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Proyectos</h2>

      <div className="card project-card">
        <img /* src={EnterpriseAppThumb} */ alt="App Gestión Empresarial" className="project-thumb" />
        <div className="project-info">
          <h3>App Gestión Empresarial</h3>
          <p>
            Aplicación móvil con Flutter y Firebase para sincronización de datos 
            empresariales en tiempo real. Incluye login, panel de administración y 
            gestión de inventarios.
          </p>
          <a href="https://github.com/tuusuario/app-gestion-empresarial" target="_blank" rel="noopener noreferrer">
            Ver código en GitHub
          </a>
        </div>
      </div>

    </section>
  );
}
