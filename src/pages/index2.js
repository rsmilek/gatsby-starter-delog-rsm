import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Super from "../components/super.js";

const index2Page = ({ data: { site } }) => {
  return (
    <div>
      <Helmet>
        <title>Contact - {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        {/* <body className="new-class-for-body" /> */}
        {/* <body data-spy="scroll" /> */}
      </Helmet>
      <Super />
    </div>
  );
};

export default index2Page;
export const pageQuery = graphql`
  query Index2PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
