
export default {

    namespace: 'contactRecords',
  
    state: {
        modalVisible : false,
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

      toggleModal(state, action){
          return {...state, modalVisible:!state.modalVisible };
      }
    },
  
  };
  