import React, { Component } from "react";
import styled from "styled-components";
import { SubpageWrapper, MainColumn, SideColumn, Column, Title, mq } from '../components/styled/common'
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
            {data.markdownRemark.frontmatter.thumbnail && <Image sizes={data.markdownRemark.frontmatter.thumbnail} />}
            <div dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html
            }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}></div>
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
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${mq.small}px) {
    align-items: flex-end;
    justify-content: center;
  }
`

const Date = styled.div`
  padding: 25px 0px 25px;
`;

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
        thumbnail
      }
    }
  }
`;
