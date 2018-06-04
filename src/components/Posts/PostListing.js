import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { SLink, colors, mq, BorderBottom } from '../styled/common'

const PostListing = ({ post }) => (
  <Article>
    <h3>
      <SLink to={post.fields.slug}>
        <PostTitle>{post.frontmatter.title}</PostTitle>
      </SLink>
    </h3>
    <Date>{post.frontmatter.date}</Date>
    <p>{post.excerpt}</p>
    <BorderBottom color={colors(.1).black} />
  </Article>
);

const Article = styled.div`
  padding: 15px 50px;
  
  @media (max-width: ${mq.small}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid ${colors(.1).black}
  }
`;

const Date = styled.div`
  margin-top: -25px;
`

const PostTitle = styled.h3`
  font-size: 2rem;
  color: ${colors().green};
  text-align: center;
`

export default PostListing;
