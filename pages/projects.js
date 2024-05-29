// pages/projects.js
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <Layout>
      <section className={styles.projects}>
        <h1>My Projects</h1>
        <div className={styles.projectList}>
          {repos.map(repo => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
