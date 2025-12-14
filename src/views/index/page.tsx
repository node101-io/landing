import { Layout } from "../layout";
import { Banner } from "@/components/banner";
import { Hero } from "@/components/home/hero";

const IndexPage = () => (
  <Layout title="node101">
    <Banner />
    <Hero />
  </Layout>
);

export default IndexPage;
