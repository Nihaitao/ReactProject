import * as service from '../../services/askComplaint';
import {message} from 'antd';
export default {
    namespace: 'askComplaint',
    state: { 
        Asks:[],
        Complaints:[],
        AskDetail:[],
        ComplaintDetail:[],
    },

    subscriptions: {
        setup({ dispatch, history }) { 
            return history.listen(({pathname, query}) => {
                if (pathname === '/complaint') { //路由匹配
                    dispatch({type:'fetchAsks'})
                }
            })
        },
    },

    effects: {
        *fetchAsks( payload, { call, put }) { //获取提问列表
            payload.typeId=2;
          const data = yield call(service.fetchAskComplaint,payload);
          if (!data.SuccessResponse) return  message.error(data.Message);
          yield put({type: 'fetchAsksSuccess', payload: data.Data});
        },
        *fetchComplaints(payload, {call, put}) { //获取投诉
            payload.typeId=1;
          const data = yield call(service.fetchAskComplaint,payload);
          if (!data.SuccessResponse) return  message.error(data.Message);

          yield put({type: 'fetchComplaintsSuccess', payload: data.Data});
        },
        *fetchAskDetail(payload, {call, put}){ //获取提问详情
          payload.typeId=2;
          const data = yield call(service.fetchAskComplaintDetail,payload);
          if (!data.SuccessResponse) return  message.error(data.Message);

          yield put({type: 'fetchAskDetailSuccess', payload: data.Data});
        },
        *fetchComplaintDetail(payload, {call, put}){ //获取投诉详情
          payload.typeId=1;
          const data = yield call(service.fetchAskComplaintDetail,payload);
          if (!data.SuccessResponse) return  message.error(data.Message);

          yield put({type: 'fetchComplaintDetailSuccess', payload: data.Data});
        },
        *postAsk(payload, {call, put}){ //提交问题
            payload.typeId=2;
            const data = yield call(service.postAskComplaint,payload);
            payload.hideModal()
            if (!data.SuccessResponse) return  message.error(data.Message);
            yield put({type:'fetchAsks'});
            message.success('提交成功！')

        },
        *postComplaint(payload, {call, put}){ //提交投诉
            payload.typeId=1;
            const data = yield call(service.postAskComplaint,payload);
            payload.hideModal()
            if (!data.SuccessResponse) return  message.error(data.Message);
            yield put({type:'fetchComplaints'});
            message.success('提交成功！');
          },
    },

    reducers: {
        fetchAsksSuccess(state, action) {
              return { ...state, Asks:action.payload };
          }, 
        fetchComplaintsSuccess(state, action) {
            return { ...state, Complaints:action.payload };
        }, 
        fetchAskDetailSuccess(state, action) {
              return { ...state, AskDetail:action.payload };
          }, 
        fetchComplaintDetailSuccess(state, action) {
            return { ...state, ComplaintDetail:action.payload };
        }
    },

};
