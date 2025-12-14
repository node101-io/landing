import { Layout } from "../layout";
import { Banner } from "../partials/banner";
import { Hero } from "./hero";

const IndexPage = () => (
  <Layout title="node101">
    <Banner />
    <Hero />
  </Layout>
);

export default IndexPage;
