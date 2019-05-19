import React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = () => (
  <>
    <Header />
    <h1>About Me</h1>
    <p>I work as a Product Manager now</p>
    <p>
      Want to work with me? <Link to="/contact">Reach out</Link>
    </p>
    <Footer />
  </>
);

export default AboutPage;
