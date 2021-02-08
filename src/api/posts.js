import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('https://todo.hmyoon.synology.me/index.php?type=list');
  return response.data;
};

export const addPost = async ({ text, password, name }) => {
  const response = await axios.post(`https://todo.hmyoon.synology.me/index.php?type=insert&text=${text}&password=${password}&name=${name}`);
  const data = await axios.get('https://todo.hmyoon.synology.me/index.php?type=list');
  if (response.status === 200) return data.data;
}

export const removePost = async ({ id, password }) => {
  const response = await axios.post(`https://todo.hmyoon.synology.me/index.php?type=delete&id=${id}&password=${password}`);
  const data = await axios.get('https://todo.hmyoon.synology.me/index.php?type=list');
  if (response.data.code === 'ok') return data.data;
}

export const updatePost = async ({ id, password, text }) => {
  await axios.post(`https://todo.hmyoon.synology.me/index.php?type=update&text=${text}&password=${password}&id=${id}`);
}