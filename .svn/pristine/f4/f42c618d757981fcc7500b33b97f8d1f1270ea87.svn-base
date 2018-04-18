import * as services from '../services/login';
import * as tools from '../utils/tools'
import {routerRedux} from 'dva/router'
import {message} from 'antd'

export default {
  namespace : 'login',
  state : {
    loginLoading: false,
    sendCodeState: false,
    tipText: "获取验证码",
    submitForm: {
      CardNumber: "",
      Password: "",
      Phone: "",
      PhoneCode: "",
      // LoginType: 1,//登录方式  1账号密码  2手机验证码
      LoginSource: 1 //登录形式（1-PC端 2-移动端）
    }
  },
  reducers : {
    addLoginInfo(state, action) {
      return {
        ...state,
        courseList: action.payload
      };
    },
    showLoginLoading(state) {
      return {
        ...state,
        loginLoading: true
      }
    },
    hideLoginLoading(state) {
      return {
        ...state,
        loginLoading: false
      }
    },
    sendCodeState(state, {payload: {
        sendCodeState
      }}) {
      return {
        ...state,
        sendCodeState
      }
    },
    updateSendCodeText(state, {tipText}) {
      return {
        ...state,
        tipText
      }
    }
  },
  effects : {
    *login({
      payload
    }, {call, put, select}) {
      const loading = yield select(state => state.login.loginLoading);
      if (loading) 
        return; //防止重复登录
      const hideMsg = message.loading('登录中..', 0);
      yield put({type: 'showLoginLoading'});

      const data = yield call(services.fetchLogin, payload);
      yield call(tools.delay, 1000);//等待1;
      hideMsg();
      yield put({type: 'hideLoginLoading'});
      if (data.SuccessResponse) {
        tools.setCookie('studentinfo', JSON.stringify(data.Data));
        tools.setCookie('UserKey', data.Data.StuID)
        tools.setCookie('UserNameKey', data.Data.Name)
        tools.setCookie('UserPhoneKey', data.Data.Phone)
        yield put(routerRedux.push('/console'));
      } else {
        message.warning(data.Message)
      }
    },
    *loginByPhone({
      payload
    }, {call, put}) {
      const loading = yield select(state => state.login.loginLoading);
      if (loading) 
        return; //防止重复登录
      const hideMsg = message.loading('登录中..', 0);
      yield put({type: 'showLoginLoading'});

      const data = yield call(services.fetchLoginByPhone, payload);
      yield call(tools.delay, 1000);
      if (data.SuccessResponse) {
        hideMsg();
        yield put({type: 'hideLoginLoading'});
        yield put(routerRedux.push('/console'));
      } else {
        hideMsg();
        yield put({type: 'hideLoginLoading'});
        message.warning(data.Message)
      }
    },
    *sendCode4Login({
      payload,
      timerLoading
    }, {call, put, select}) {
      //获取发送状态
      const sendCodeState = yield select(state => state.login.sendCodeState);
      if (sendCodeState) 
        return;
      const data = yield call(services.fetchPhoneCode4Login, payload);
      if (data.SuccessResponse) {
        //改变发送状态
        yield put({
          type: 'sendCodeState',
          payload: {
            sendCodeState: true
          }
        });
        //倒计时开始
        message.success('短信已发送')
        timerLoading();
      } else {
        message.warning(data.Message)
      }
    }
  },
  subscriptions : {}
};
