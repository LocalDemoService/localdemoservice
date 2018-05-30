import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { SLink, colors, mq } from '../styled/common'

const PostListing = ({ post }) => (
  <Article>
    <h3>
      <SLink to={post.fields.slug}>
        <PostTitle>{post.frontmatter.title}</PostTitle>
      </SLink>
    </h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    <hr />
  </Article>
);

const Article = styled.div`
  padding: 15px 50px;
  
  @media (max-width: ${mq.small}px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PostTitle = styled.h3`
  font-size: 2rem;
  color: ${colors().green};
`

export default PostListing;
