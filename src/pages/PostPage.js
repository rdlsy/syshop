import React from 'react';
import PostContainer from '../containers/PostContainer';
import PostListContainer from '../containers/PostListContainer'
import styled from 'styled-components';

const PostTemplate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 4rem 1.2rem 7rem;
  @media ${props => props.theme.tablet} {
    padding: 2rem 1rem 4rem;
  }
`;

function PostPage() {
  return (
    <PostTemplate>
      <PostContainer />
      <PostListContainer />
    </PostTemplate>
  );
}

export default PostPage;