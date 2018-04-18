export default {

    namespace: 'messageCenter',
  
    state: {
       messageContent:'main',//main : 主列表  details:详情
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      setMessageContent(state,action){
        return { ...state, messageContent:action.payload };
      },
      toggleModal(state, action){
          return {...state, modalVisible:!state.modalVisible };
      }
    },
  
  };
  