// components/ProjectCard.js
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ repo }) => {
  return (
    <div className={styles.card}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  );
};

export default ProjectCard;
