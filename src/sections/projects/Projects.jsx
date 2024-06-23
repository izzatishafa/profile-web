import styles from './ProjectsStyles.module.css';
import logo1 from '../../assets/sistem-administrasi-magang2.png';
import logo2 from '../../assets/my-cashier.jpeg';
import logo3 from '../../assets/todoapp-logo.png';
import ProjectCard from '../../common/ProjectCard';
import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard
            src={logo1}
            link="https://github.com/izzatishafa/project-pkl"
            h3="Sistem Administrasi Magang"
            p="Enterprise App"
            />
            <ProjectCard
            src={logo2}
            link="https://github.com/izzatishafa/ukk-kasir"
            h3="MyCashier"
            p="Business App"
            />
            <ProjectCard
            src={logo3}
            link="https://github.com/Ade-mir/company-landing-page-2"
            h3="To-Do List App"
            p="Productivity App"
            />
        </div>
    </section>
  )
}

export default Projects
