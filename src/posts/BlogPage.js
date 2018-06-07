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
          <Position>
            <Title>{data.markdownRemark.frontmatter.title}</Title>
            <Date>{data.markdownRemark.frontmatter.date}</Date>
            <PostBody>
              {data.markdownRemark.frontmatter.thumbnail && <Image src={data.markdownRemark.frontmatter.thumbnail} />}
              <div dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html
              }} style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
              }}>
              </div>
            </PostBody>
          </Position>
        </MainColumn>
        <SideColumn>
          <Contact />
        </SideColumn>
      </SubpageWrapper>
    );
  }
}

const Position = styled(Column) `
  justify-content: center;
  align-items: center;

  @media (max-width: ${mq.small}px) {
    align-items: flex-end;
    justify-content: center;
  }
`

const PostBody = styled(Column) `
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  margin: 0 auto;
  margin: 10px 0; 
  border: 1px solid #000000;
  width: 300px;
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
