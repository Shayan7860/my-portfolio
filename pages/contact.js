// pages/contact.js
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contact}>
        <h1>Contact Me</h1>
        <ContactForm />
      </section>
    </Layout>
  );
}
