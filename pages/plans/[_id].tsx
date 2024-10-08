import { GetServerSideProps } from "next";
import { PhonePlanType } from "../../types/types";

interface PlanPageProps {
  plan: PhonePlanType;
}

const PlanPage: React.FC<PlanPageProps> = ({ plan }) => {
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
    `${process.env.NEXT_PUBLIC_API_URL}/api/plans/${_id}`
  );
  if (!res.ok) {
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
