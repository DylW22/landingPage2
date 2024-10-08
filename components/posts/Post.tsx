import styles from "./post.module.css";
import { PostProps } from "../../types/types";

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.side}>
          <h1>{postData.title}</h1>
          <p>
            <em>
              By {postData.author} on {postData.date}
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
