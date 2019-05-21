import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";

const BlogPage = () => {
  const {
    allMarkdownRemark: { edges }
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            id
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {edges.map(({ node: { frontmatter: { title, date }, id } }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
