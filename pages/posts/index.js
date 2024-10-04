import { useEffect, useState } from "react";
import Post from "../../components/posts/Post";
import styles from "./posts.module.css";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

const HomePage = ({ posts }) => {
  return (
    <div className={styles.postsContainer}>
      <h1>Blog Posts</h1>
      <ul className={styles.postsGrid}>
        {posts.map((post) => (
          <li key={post._id}>
            <Post postData={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
