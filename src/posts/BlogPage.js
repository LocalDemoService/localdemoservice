import React, { Component } from "react";
import styled from "styled-components";
import { SubpageWrapper, MainColumn, SideColumn, Column, Title } from '../components/styled/common'
import Contact from '../components/Forms/Contact'

class BlogPage extends Component {
  render() {
    const { data } = this.props;

    return (
      <SubpageWrapper>
        <MainColumn>
          <FlexStart>
            <Title>{data.markdownRemark.frontmatter.title}</Title>
            <Date>{data.markdownRemark.frontmatter.date}</Date>
            <div dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html
            }}></div>
          </FlexStart>
        </MainColumn>
        <SideColumn>
          <Contact />
        </SideColumn>
      </SubpageWrapper>
    );
  }
}

const FlexStart = styled(Column) `
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`

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
