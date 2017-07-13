import {ADD_COLLECT,REMOVE_COLLECT} from './mutation-types'
export const mutations = {
  //n 当前要收藏的那本书，将这本书放入到数组中
  [ADD_COLLECT](state,n){
    state.collect.push(n);
  }
};

