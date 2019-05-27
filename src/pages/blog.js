import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

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
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {edges.map(
          ({
            node: {
              frontmatter: { title, date },
              id,
              fields: { slug }
            }
          }) => (
            <li key={id}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>{date}</p>
            </li>
          )
        )}
      </ol>
    </Layout>
  );
};

export default BlogPage;
