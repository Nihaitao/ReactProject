import { fetchCourseDetail,fetchCourseCatalogList,fetchCourseDownloadList,fetchCourseCommentList,fetchTeacherInfo } from '../../services/course';
export default {

    namespace: 'course',

    state: {
        courseDetail:{},//课程详情
        courserCatalogList:[],//课程目录列表
        downloadCourseDataList:[],//下载数据列表
        courseCommentList:[],//评论列表
        teacherInfo:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        *fetchCourseDetail({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchCourseDetail, payload);
            yield put({
              type: 'fetchCourseDetailSuccess',
              payload: data.Data
            });
        },
        *fetchCourseCatalogList({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchCourseCatalogList, payload);
            yield put({
              type: 'fetchCourseCatalogListSuccess',
              payload: data.Data
            });
        },
        *fetchCourseCommentsList({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchCourseCommentList, payload);
            yield put({
              type: 'fetchCourseCommentListSuccess',
              payload: data.Data
            });
        },
        *fetchCourseDownloadList({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchCourseDownloadList, payload);
            yield put({
              type: 'fetchCourseDownloadListSuccess',
              payload: data.Data
            });
        },
        *fetchTeacherInfo({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchTeacherInfo, payload);
            yield put({
              type: 'fetchCourseDownloadListSuccess',
              payload: data.Data
            });
        },
        
    },

    reducers: {
        fetchCourseDetailSuccess(state, action) {
            return { ...state, courseDetail:action.payload };
        },
        fetchCourseCatalogListSuccess(state, action) {
            return { ...state, courserCatalogList:action.payload };
        },
        fetchCourseDownloadListSuccess(state, action) {
            return { ...state, downloadCourseDataList:action.payload };
        },
        fetchCourseCommentListSuccess(state, action) {
            return { ...state, courseCommentList:action.payload };
        },
        fetchTeacherInfoSuccess(state, action) {
            return { ...state, courseCommentList:action.payload };
        }
    },

};
