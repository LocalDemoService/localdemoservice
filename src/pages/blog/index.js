import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { Title, SubpageWrapper, MainColumn, SideColumn, Border, colors, mq } from "../../components/styled/common";
import Contact from "../../components/Forms/Contact";
import PostListing from "../../components/Posts/PostListing";

const Blog = ({ data }) => {
  return (
    <SubpageWrapper>
      <MainColumn>
        <PostContainer>
          {data.allMarkdownRemark.edges.map(({ node }) =>
            <PostListing key={node.fields.slug} post={node} />)}
        </PostContainer>
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

const PostContainer = styled.div`
  justify-content: flex-start;

  @media (max-width: ${mq.small}px) {
    justify-content: center;
    align-items: center;
  }
`;

export const query = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;

export default Blog;
