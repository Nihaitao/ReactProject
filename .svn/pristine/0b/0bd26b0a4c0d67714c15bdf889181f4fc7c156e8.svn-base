import * as services from '../services/login'
import * as tools from '../utils/tools'
import { routerRedux } from 'dva/router'
import {message } from 'antd'

export default {
  namespace: 'paging',
  state: {
    loginLoading: false,
    showQuickJumper: true,
    total: null,
    showTotal: false,
    PageSize: tools.pageInit.PageSize,
    PageIndex: tools.pageInit.PageIndex,
    PageStatus: tools.pageInit.PageStatus,
  },
  reducers: {
    currentPage(state, action) {
      return {
        ...state,
        current: action.page
      };
    },
    total(state, action) {
      if(action.payload>0){
        return {
          ...state,
          PageIndex: tools.pageInit.PageIndex,
          total:action.payload
        };
      }else{
        return {  ...state};
      }
    },
  },
  effects: {
     
  },
  subscriptions: {
    
  },
};
