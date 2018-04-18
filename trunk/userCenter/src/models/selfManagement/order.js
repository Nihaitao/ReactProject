import { fetchOrderList,fetchCourseDetail,fetchCourseCatalogList,fetchOrderPayById } from '../../services/order';
export default {

    namespace: 'order',

    state: {
        orderList: [],//全部订单列表
        orderPayList: [],//支付订单列表
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        *fetchOrderList({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchOrderList, payload);
            yield put({
              type: 'fetchOrderListSuccess',
              payload: data.Data
            });
        },
        *fetchOrderPayById({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(fetchOrderPayById, payload);
            yield put({
              type: 'fetchOrderPayByIdSuccess',
              payload: data.Data
            });
        },
       
        
    },

    reducers: {
        fetchOrderListSuccess(state, action) {
            return { ...state, orderList:action.payload };
        },
        fetchOrderPayByIdSuccess(state, action) {
            return { ...state, orderPayList:action.payload };
        },
    },

};
