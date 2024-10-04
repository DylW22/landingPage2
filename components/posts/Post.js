import styles from "./post.module.css";
import { useRouter } from "next/router";
const Post = ({ postData }) => {
  const router = useRouter();

  const handlePostClick = () => {
    router.push(`/posts/${postData._id}`);
  };
  return (
    <div className={styles.cardContainer} onClick={handlePostClick}>
      <div className={styles.card}>
        <div className={styles.side}>
          <h1>{postData.title}</h1>
          <p>
            <em>
              By {postData.author} on {postData.date}
              {/*new Date(postData.date).toLocaleDateString()*/}
            </em>
          </p>
        </div>
        <div className={`${styles.side} ${styles.back}`}>
          {postData.content}
        </div>
      </div>
    </div>
  );
};

export default Post;

/*

    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.side}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/jimmy.jpg"
            alt="Jimmy Eat World"
          />
        </div>
        <div className={`${styles.side} ${styles.back}`}>Jimmy Eat World</div>
      </div>
    </div>
*/
