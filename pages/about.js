// pages/about.js
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout>
      <section className={styles.about}>
        <h1>About Me</h1>
        <p>[Your Bio]</p>
      </section>
    </Layout>
  );
}
