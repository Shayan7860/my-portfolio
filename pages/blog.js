// pages/blog.js
import Layout from '../components/Layout';
import BlogPost from '../components/BlogPost';
import styles from '../styles/Blog.module.css';

export default function Blog() {
  return (
    <Layout>
      <section className={styles.blog}>
        <h1>Blog</h1>
        <div className={styles.blogList}>
          {/* Map through your blog posts and render BlogPost components */}
        </div>
      </section>
    </Layout>
  );
}
