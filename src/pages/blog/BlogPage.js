import React, { Component } from "react";
import styled from "styled-components";
import { SubpageWrapper, MainColumn, SideColumn, Title } from '../../components/styled/common'
import Contact from '../../components/Forms/Contact'

class BlogPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <SubpageWrapper>
        <MainColumn>
          <Title>{data.markdownRemark.frontmatter.title}</Title>
        </MainColumn>
        <SideColumn>
          <Contact />
        </SideColumn>
      </SubpageWrapper>
    );
  }
}

export default BlogPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const Date = styled.div`
  padding: 25px 0px 25px;
`;
