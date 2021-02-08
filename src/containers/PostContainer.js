import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PostInsert from '../components/PostInsert';
import { addPost } from '../modules/posts';

function PostContainer() {
  const dispatch = useDispatch();
  const onCreate = useCallback(({id, text, name, password}) => {
    dispatch(addPost({id, text, name, password}))
  },[dispatch]);

  return <PostInsert onCreate={onCreate} />;
}

export default PostContainer;
