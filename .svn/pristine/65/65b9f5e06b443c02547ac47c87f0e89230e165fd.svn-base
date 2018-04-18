import * as services from '../../services/myClass';
import {message} from 'antd'
import * as tools from '../../utils/tools'

export default {

  namespace : 'myClass',

  state : {
    detailId: null, //>0 列表主页 else details详情
    modalVisible: false,
    MyLessons: [],
    MyQuestions: [],
    MyNotes: [],
    MyComments: [],
    MyLessonRecords: [],
    MyQuestionDetailTitle: "",
    MyQuestionDetail: []
  },

  subscriptions : {
    setup({dispatch, history}) { // eslint-disable-line
      return history.listen(({pathname, query}) => {
        let payload = tools.pageInit;
        if (pathname === '/classmanage') { //路由匹配
          dispatch({type: 'fetchMyLessons', payload});
        } else if (pathname === '/classrecord') {
          dispatch({type: 'fetchMyLessonRecords', payload});
        }
      })
    }
  },

  effects : {
    *fetchMyLessons({ //获取 已经购买课程列表
      payload
    }, {call, put}) {
      const data = yield call(services.MyLessons, payload);
      if (!data.SuccessResponse) 
        return;
      yield put({type: 'fetchMyCoursesSuccess', payload: data.Data});
      yield put({type: 'paging/total', payload: data.TotalCount}); //初始化并保存分页总数
      yield put({type: 'detailId'}); //初始化detailId

    },
    *fetchMyQuestions({ //获取 我的答疑
      payload
    }, {call, put}) {
      const data = yield call(services.MyQuestions, payload);
      if (!data.SuccessResponse) 
        return;
      yield put({type: 'fetchMyQuestionsSuccess', payload: data.Data});
      yield put({type: 'paging/total', payload: data.TotalCount});
      yield put({type: 'detailId'}); //初始化detailId
    },
    *fetchMyQuestionDetail({ //获取 我的答疑详情
      payload
    }, {call, put}) {
      if (payload.PID) {
        const data = yield call(services.MyQuestionDetail, payload);
        if (data.SuccessResponse) 
          payload.data = data.Data;
        }
      yield put({type: 'fetchMyQuestionDetailSuccess', payload});
    },
    *fetchMyNotes({ //获取 我的笔记
      payload
    }, {call, put}) {
      const data = yield call(services.MyNotes, payload);
      if (!data.SuccessResponse) 
        return;
      yield put({type: 'fetchMyNotesSuccess', payload: data.Data});
      yield put({type: 'paging/total', payload: data.TotalCount});
      yield put({type: 'detailId'}); //初始化detailId
    },
    *fetchMyComments({ //获取 我的评论
      payload
    }, {call, put}) {
      const data = yield call(services.MyComments, payload);
      if (!data.SuccessResponse) 
        return;
      yield put({type: 'fetchMyCommentsSuccess', payload: data.Data});
      yield put({type: 'paging/total', payload: data.TotalCount});
      yield put({type: 'detailId'}); //初始化detailId
    },
    *fetchMyLessonRecords({ //获取 已学课程
      payload
    }, {call, put}) {
      const data = yield call(services.MyLessonRecords, payload);
      if (!data.SuccessResponse)  return;
      var arr = [];
      var d = data.Data;
      var arrlite = [d[0]];
      for (var i = 1; i < d.length; i++) {
        var a = d[i - 1].LookDate;
        var b = d[i].LookDate;
        if (a == b) {
          arrlite.push(d[i]);
        } else {
          arrlite.length > 0 && arr.push(arrlite);
          arrlite = [];
          arrlite.push(d[i]);
        }
        if (i == d.length - 1) {
          arr.push(arrlite)
        }
      }
      yield put({type: 'fetchMyLessonRecordsSuccess', payload: arr});
      yield put({type: 'paging/total', payload});
      yield put({type: 'detailId'}); //初始化detailId
    }
  },
  reducers : {
    fetchMyCoursesSuccess(state, action) {
      return {
        ...state,
        MyLessons: action.payload
      };
    },
    fetchMyQuestionsSuccess(state, action) {
      return {
        ...state,
        MyQuestions: action.payload
      };
    },
    fetchMyNotesSuccess(state, action) {
      return {
        ...state,
        MyNotes: action.payload
      };
    },
    fetchMyCommentsSuccess(state, action) {
      return {
        ...state,
        MyComments: action.payload
      };
    },
    fetchMyLessonRecordsSuccess(state, action) {
      return {
        ...state,
        MyLessonRecords: action.payload
      };
    },
    save(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    fetchMyQuestionDetailSuccess(state, {
      payload: {
        PID,
        data
      }
    }) {
      return {
        ...state,
        detailId: PID,
        MyQuestionDetail: data
      };
    },
    toggleModal(state, action) {
      return {
        ...state,
        modalVisible: !state.modalVisible
      };
    },
    detailId(state, action) {
      return {
        ...state,
        detailId: false
      };
    }
  }
};
