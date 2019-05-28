import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = ({
  data: {
    markdownRemark: {
      frontmatter: { title, date },
      html
    }
  }
}) => (
  <Layout>
    <h1>{title}</h1>
    <p>{date}</p>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Layout>
);

export default Blog;
export { query };
