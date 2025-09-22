import { Layout } from "@app/components/Layout";

type Props = {
  children: React.ReactNode;
};

const SomeLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export default SomeLayout;
