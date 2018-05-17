import React from 'react';
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Title, SubpageWrapper, MainColumn, SideColumn, Border, colors } from '../../components/styled/common'
import Contact from '../../components/Forms/Contact'
import PostListing from '../../components/Posts/PostListing'


const Blog = ({ data }) => {
  return (
    <SubpageWrapper>
      <MainColumn>
        {data.allMarkdownRemark.edges.map(({ node }) => <PostListing post={node} />)}
      </MainColumn>
      <SideColumn>
        <Contact />
      </SideColumn>
    </SubpageWrapper>
  );
};

const PostContainer = styled.div`
  margin: 15px 0;
`

export const query = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
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