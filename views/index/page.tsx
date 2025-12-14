import { Layout } from "../layout";
import { Banner } from "../partials/banner";
import { Hero } from "./hero";

export const LandingPage = () => (
  <Layout title="node101">
    <Banner />
    <Hero />
  </Layout>
);
