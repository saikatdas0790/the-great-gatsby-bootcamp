import React from "react";
import { Link } from "gatsby";

const AboutPage = () => (
  <>
    <h1>About Me</h1>
    <p>I work as a Product Manager now</p>
    <p>
      Want to work with me? <Link to="/contact">Reach out</Link>
    </p>
  </>
);

export default AboutPage;
