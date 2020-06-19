import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import MyNavBar from "../components/myNavbar.js";

const index3Page = ({ data: { site } }) => {
  return (
    <div>
      <Helmet>
        <title>Contact - {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <MyNavBar />
    </div>
  );
};

export default index3Page;

export const pageQuery = graphql`
  query Index3PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
