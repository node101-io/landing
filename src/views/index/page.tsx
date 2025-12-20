import { Layout } from "../layout";
import { Banner } from "@/components/banner";
import { Hero } from "@/components/home/hero";
// import { TrustedBy } from "@/components/home/trusted-by";

const IndexPage = () => (
  <Layout title="node101">
    <Banner />
    <Hero />
    {/* <TrustedBy /> */}
  </Layout>
);

export default IndexPage;
