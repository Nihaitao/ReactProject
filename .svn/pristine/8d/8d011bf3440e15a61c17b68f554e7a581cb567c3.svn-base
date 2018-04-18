import { fetchCourse, fetchExamPaper, fetchQuestionStoreList, fetchChapterQuestion, fetchExamInfo, fetchPaperType,fetchExamPaperQuestions } from '../../services/startTest';

export default {

  namespace: 'startTest',

  state: {
    testTabId: '1', //1:章节练习   2：模拟试卷  3：历年真题
    subject: '',//当前选择科目
    disciplineId: '',
    courseList: [],//课程列表
    questionStoreList: [],
    chapterQuestionList: [],
    examPaperList: [],//历年真题，真题列表
    examItem: [],//试卷信息
    examPaperType:[],//试卷类型信息
    paperInfo:[],//做题页面试卷信息
    questionType:[],//做题页面题目
    totalScore:'',//做题页面总分

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
       
        if (pathname === '/selectcourse') {
         
          dispatch({ type: 'fetchCourseList' });
        }
      });

    },
  },

  effects: {
    *fetchCourseList({ payload }, { call, put }) {
      const data = yield call(fetchCourse);
      
      yield put({
        type: 'fetchCourseListSuccess',
        payload: data.Data
      });
    },
    *fetchQuestionStore({ payload }, { call, put }) {
      const data = yield call(fetchQuestionStoreList, payload);
      yield put({
        type: 'fetchQuestionStoreListSuccess',
        payload: data.Data
      });
    },
    *fetchChapterQuestion({ payload }, { call, put }) {
      const data = yield call(fetchChapterQuestion, payload);
      yield put({
        type: 'fetchChapterQuestionSuccess',
        payload: data.Data
      });
    },
    *fetchExamPaperList({ payload }, { call, put }) {
      const data = yield call(fetchExamPaper, payload);
      yield put({
        type: 'fetchExamPaperListSuccess',
        payload: data.Data
      });
    },
    *fetchExamPaperInfo({ payload }, { call, put }) {
      const data = yield call(fetchExamInfo, payload);
      yield put({
        type: 'fetchExamPaperInfoSuccess',
        payload: data.Data
      });
    },
    *fetchExamPaperType({ payload }, { call, put }) {
      const data = yield call(fetchPaperType, payload);
      yield put({
        type: 'fetchPaperTypeSuccess',
        payload: data.Data
      });
    },
    *fetchExamPaperQuestions({ payload }, { call, put }) {
      const data = yield call(fetchExamPaperQuestions, payload);
      yield put({
        type: 'fetchExamPaperQuestionsSuccess',
        payload: {
          paperInfo:data.Data.PaperInfo,
          questionType:data.Data.QuestionType
        }
      });
    },




  },


  reducers: {
    fetchExamPaperListSuccess(state, action) {
      return { ...state, examPaperList: action.payload };
    },
    fetchQuestionStoreListSuccess(state, action) {
      return { ...state, questionStoreList: action.payload };
    },
    fetchCourseListSuccess(state, action) {
      return { ...state, courseList: action.payload };
    },
    fetchChapterQuestionSuccess(state, action) {
      return { ...state, chapterQuestionList: action.payload };
    },
    fetchExamPaperInfoSuccess(state, action) {
      return { ...state, examItem: action.payload };
    },
    fetchPaperTypeSuccess(state, action) {
      return { ...state, examPaperType: action.payload };
    },
    fetchExamPaperQuestionsSuccess(state, action) {
      return { ...state, paperInfo: action.payload.paperInfo,questionType:action.payload.questionType  };
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },

    changeTabId(state, action) {
      return { ...state, testTabId: action.payload };
    },

    fetchSubject(state, action) {
      return { ...state, subject: action.payload.subject, disciplineId: action.payload.disciplineId };

    }
  },

};
