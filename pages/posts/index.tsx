import { GetStaticProps, InferGetStaticPropsType } from "next";
import Post from "../../components/posts/Post";
import styles from "./../../styles/posts.module.css";
import { BlogPost } from "../../types/types";
import Link from "next/link";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps<{
  posts: BlogPost[];
}> = async () => {
  try {
    const res = await fetch(`/${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
    if (!res.ok) {
      return {
        notFound: true,
      };
    }
    console.log("blog res: ", res);
    const posts: BlogPost[] = await res.json();

    return {
      props: {
        posts,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

const HomePage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  if (!router.isFallback && !posts) {
    return <div>Posts index error</div>;
  }
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
