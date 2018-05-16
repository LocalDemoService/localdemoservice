import React, { Component } from "react";
import styled from "styled-components";

class BlogPage extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
        />
      </div>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
const Date = styled.div`
  padding: 25px 0px 25px;
`;
