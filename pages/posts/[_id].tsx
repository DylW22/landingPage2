import { GetServerSideProps } from "next";
import { BlogPost } from "../../types/types";
import { useRouter } from "next/router";

interface PostPageProps {
  post: BlogPost;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post) {
    return <div>Plans index error</div>;
  }

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

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${_id}`
  );

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const post = await res.json();
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
