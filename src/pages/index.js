import React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";
import Header from "../components/header";

const IndexPage = () => (
  <>
    <Header />
    <h1>Hello</h1>
    <h2>I'm Saikat, a full-stack developer from Kolkata, India.</h2>
    <p>
      Need a developer? <Link to="/contact">Contact Me</Link>
    </p>
    <Footer />
  </>
);

export default IndexPage;
