import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>I work as a Product Manager now</p>
    <p>
      Want to work with me? <Link to="/contact">Reach out</Link>
    </p>
  </Layout>
);

export default AboutPage;
