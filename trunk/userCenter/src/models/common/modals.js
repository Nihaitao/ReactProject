import * as tools from '../../utils/tools'
import { routerRedux } from 'dva/router'
import {message } from 'antd'

export default {
  namespace: 'modals',
  state: {
    askVisible: false,
    complaintVisible: false,
  },
  reducers: {
    askVisible(state, action) {
      return {
        ...state,
        askVisible: action.visible
      };
    },
    complaintVisible(state, action) {
      return {
        ...state,
        complaintVisible: action.visible
      };
    },
  },
  effects: {
     
  },
  subscriptions: {
    
  },
};
