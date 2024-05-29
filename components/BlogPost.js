// components/BlogPost.js
import styles from '../styles/BlogPost.module.css';

const BlogPost = ({ post }) => {
  return (
    <div className={styles.post}>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <a href={post.url}>Read more</a>
    </div>
  );
};

export default BlogPost;
