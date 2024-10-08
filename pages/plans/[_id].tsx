import { GetServerSideProps, GetStaticPaths } from "next";
import { PhonePlanType } from "../../types/types";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
interface PlanPageProps {
  plan: PhonePlanType;
}

const PlanPage: React.FC<PlanPageProps> = ({ plan }) => {
  const router = useRouter();
  if (!router.isFallback && !plan) {
    return <ErrorPage statusCode={404} />;
  }

  return <div>{plan.description}</div>;
};

export default PlanPage;

interface Params {
  _id?: string;
}

interface ExtendedContext {
  params?: Params;
}

export const getServerSideProps: GetServerSideProps = async (
  context: ExtendedContext
) => {
  const { _id } = context.params as { _id: string };
  const res = await fetch(
    `$/{process.env.NEXT_PUBLIC_API_URL}/api/plans/${_id}`
  );
  if (!res.ok) {
    throw new Error(`${res.ok}`);
    return {
      notFound: true,
    };
  }
  const plan = await res.json();

  if (!plan) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      plan,
    },
  };
};
