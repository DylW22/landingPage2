import { GetServerSideProps } from "next";
import { BlogPost } from "../../types/types";

interface PostPageProps {
  post: BlogPost;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        By {post.author} on {post.date}
      </p>
      <div>{post.content}</div>
    </div>
  );
};

interface Params {
  _id?: string;
}
interface ExtendedContext {
  params?: Params;
}

export const getServerSideProps: GetServerSideProps = async (
  context: ExtendedContext
) => {
  const { _id } = context.params as { _id: string }; // Get `_id` from the params

  console.log("getServerSideProps: _id", _id);
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${_id}`
  // );
  const res = await fetch(`/api/posts/${_id}`);

  if (!res.ok) {
    console.log("Response is invalid");
    throw new Error(`${res.ok}`);
    return {
      notFound: true,
    };
  }

  const post = await res.json();
  console.log("postData: ", post);

  // If post not found, return a 404
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
