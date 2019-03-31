import axios from 'axios'

const base = 'http://localhost:4000'

export function getPosts(payload) {
  return axios.get(`${base}/api/posts/read/${payload.name}?page=${payload.page}`);
}

export function fetchDataSize(name) {
  return axios.get(`${base}/api/posts/count/${name}`);
}