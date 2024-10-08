import { GetStaticProps, InferGetStaticPropsType } from "next";
import Post from "../../components/posts/Post";
import styles from "./posts.module.css";
import { BlogPost } from "../../types/types";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{
  posts: BlogPost[];
}> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts: BlogPost[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

const HomePage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={styles.postsContainer}>
      <h1>Blog Posts</h1>
      <ul className={styles.postsGrid}>
        {posts.map((post) => (
          <li key={`${post._id}`}>
            <Link href={`/posts/${post._id}`}>
              <Post postData={post} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
