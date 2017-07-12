import axios from 'axios';
//导出函数getSliders
export function getSliders() {
  return axios.get('/api/sliders');
}

export function getHotBook() {
  return axios.get('/api/hot');
}
