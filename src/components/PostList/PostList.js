import React, { useCallback, useState } from 'react';
import { FaUserCircle, FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { Textarea, Button, List, Btns, Item, Head, Text, Password, PasswordWrap, TextBox } from './style';

const PostItem = React.memo(function PostItem({ post, onRemove, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSeletedPost] = useState(false);
  const [confirmPw, setConfirmPw] = useState('');
  const [updateText, setUpdateText] = useState(post.text);
  const onChangePw = e => {
    setConfirmPw(e.target.value);
  };
  const onChangeText = e => {
    setUpdateText(e.target.value);
  }
  const popup = useCallback(() => {
    setOpen(!open);
    setConfirmPw('');
  },[open]);
  const edit = useCallback(() => {
    setSeletedPost(!selectedPost);
    setUpdateText(post.text);
  },[selectedPost, post.text]);
  const remove = () => {
    if (post.password !== confirmPw) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      alert('삭제되었습니다.');
      onRemove({
        id: post.id, 
        password: confirmPw
      });
    }
  }
  const update = () => {
    if (post.password !== confirmPw) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else {
      alert('수정되었습니다.');
      onUpdate({
        id: post.id,
        password: confirmPw,
        text: updateText
      })
    }
  };
  return (
    <Item>
      <Head>
        <FaUserCircle />
        <dl>
          <dt>{post.name}</dt>
          <dd>{post.regdate}</dd>
        </dl>
      </Head>
      <Text>
        {
          selectedPost ?
          <TextBox>
            <Textarea
              style={{height: '75px'}}
              value={updateText}
              onChange={onChangeText}
              name="text"
              autoFocus
            />
            <Button onClick={popup} style={{marginTop: '0.5em'}}>수정</Button>
          </TextBox>
          :
          post.text
        }
      </Text>
      <Btns>
        <MdModeEdit onClick={edit} />
        <FaTrashAlt onClick={popup} />
      </Btns>
      {(
        open &&
        <Password>
          <PasswordWrap>
            <p>비밀번호를 입력해주세요.</p>
            <input type="password" value={confirmPw} onChange={onChangePw} autoFocus />
            <div>
              {(
                selectedPost ?
                <button onClick={update}>수정</button> :
                <button onClick={remove}>삭제</button>
              )}
              <button onClick={popup}>취소</button>
            </div>
          </PasswordWrap>
        </Password>
      )}
    </Item>
  );
});

export default function PostList({ posts, onRemove, onUpdate }) {
  return (
    <>
      <List>
      {posts.map(post => (
        <PostItem key={post.id} post={post} onRemove={onRemove} onUpdate={onUpdate} />
      ))}
    </List>
    </>
  );
}