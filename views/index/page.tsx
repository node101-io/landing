import { Layout } from "../layout";
import { Banner } from "../partials/banner";
import { Hero } from "./hero";

// Ana sayfa component'i
export const LandingPage = () => (
  <Layout title="Ana Sayfa">
    <Banner />
    <Hero />
  </Layout>
);
