import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { SLink } from '../styled/common'

const PostListing = ({ post }) => (
  <Article>
    <h3>
      <SLink to={post.fields.slug}>{post.frontmatter.title}</SLink>
    </h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
    <hr />
  </Article>
);

const Article = styled.article`
  padding: 15px 50px;
`;

export default PostListing;
