import { fetchStudentInfoSet,fetchHDictionaryList, EditStudentInfoByStuId } from '../../services/studentInfo';
import {message} from 'antd';
export default {

    namespace: 'studentInfo',

    state: {
       infoList:[],
       dictionaryList:[]
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        *fetchStudentInfoSet({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchStudentInfoSet, payload);
            yield put({
              type: 'fetchStudentInfoSetSuccess',
              payload: data.Data
            });
        },
        *fetchHDictionaryList({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchHDictionaryList, payload);
            yield put({
              type: 'fetchHDictionaryListSuccess',
              payload: data.Data
            });
        },
        *EditStudentInfoByStuId({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchHDictionaryList, payload);
            if(data.Data){
                message.success("修改成功");
               }else{
                message.error(data.message);
               }
            
        },
       
       
        
    },

    reducers: {
        fetchStudentInfoSetSuccess(state, action) {
            return { ...state, infoList:action.payload };
        },
        fetchHDictionaryListSuccess(state, action) {
            return { ...state, dictionaryList:action.payload };
        },
        EditStudentInfoByStuIdSuccess(state, action) {
            if(action.payload.Data){
                message.success("修改成功");
               }else{
                message.error(data.message);
               }
            
        },
        
       
    },

};
