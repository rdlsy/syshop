import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts, removePost, updatePost } from '../modules/posts';

function PostListContainer() {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();
  const onRemove = useCallback(({id, password}) => {
    dispatch(removePost({id, password}));
  },[dispatch]);

  const onUpdate = useCallback(({id, password, text}) => {
    dispatch(updatePost({id, password, text}))
  },[dispatch]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return (
    <div className="Loading">
      <span className="l1"></span>
      <span className="l2"></span>
      <span className="l3"></span>
    </div>
  );
  if (error) return <div className="Error"><span></span>에..에러!!</div>;
  if (!data) return <div className="Error"><span></span>등록된 방명록이 없..다!!</div>;

  return (
    <PostList posts={data} onRemove={onRemove} onUpdate={onUpdate} />
  );
}

export default PostListContainer;
