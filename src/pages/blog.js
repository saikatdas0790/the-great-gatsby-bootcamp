import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import blogStyles from "./blog.module.scss";

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
      <ol className={blogStyles.posts}>
        {edges.map(
          ({
            node: {
              frontmatter: { title, date },
              id,
              fields: { slug }
            }
          }) => (
            <li key={id} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          )
        )}
      </ol>
    </Layout>
  );
};

export default BlogPage;
