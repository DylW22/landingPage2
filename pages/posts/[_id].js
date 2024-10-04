import { notFound } from "next/navigation";
import { useRouter } from "next/router";

const PostPage = ({ postData }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>
        By {postData.author} on {postData.date}
      </p>
      <div>{postData.content}</div>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { _id } = context.params; // Get `_id` from the params

  console.log("getServerSideProps: _id", _id);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${_id}`
  ); // Remove trailing slash

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const postData = await res.json();
  console.log("postData: ", postData);

  // If post not found, return a 404
  if (!postData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postData,
    },
  };
}

export default PostPage;
