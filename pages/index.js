// pages/index.js
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm [Your Name], a [Your Profession].</p>
      </section>
      <section className={styles.projects}>
        <h2>Projects</h2>
        {/* List your projects here */}
      </section>
      <section className={styles.blog}>
        <h2>Latest Blog Posts</h2>
        {/* List your blog posts here */}
      </section>
    </Layout>
  );
}
