import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage';
import Login from './routes/LoginPage';
import ConsolePage from './routes/ConsolePage';
//我的网课
import ClassManagePage from './routes/myClass/ClassManagePage';
import ClassRecordPage from './routes/myClass/ClassRecordPage';
//我的题库
import StartTestingPage from './routes/questionBankItem/StartTestingPage';
//选择课程
import SelectCoursePage from './routes/questionBankItem/SelectCoursePage';

import StartTestTabPage from './routes/questionBankItem/StartTestTabPage';
//练习记录
import TestingRecordPage from './routes/questionBankItem/TestingRecordPage';
//试卷信息
import MockExamInfoPage from './routes/questionBankItem/MockExamInfoPage';
//开始做题
import DoExcercisePage from './routes/questionBankItem/DoExcercisePage';
//立即缴费
import PayFeesPage from './routes/myTuition/PayFeesPage';
//立即缴费——余额充值
import RechargePage from './routes/myTuition/RechargePage';
//立即缴费——余额充值——确认充值
import RechargeDetailsPage from './routes/myTuition/RechargeDetailsPage';
//立即缴费——在线支付——选择支付方式
import SelectPayWayPage from './routes/myTuition/SelectPayWayPage';
//立即缴费——在线支付——选择支付方式——支付完成
import PaySuccessPage from './routes/myTuition/PaySuccessPage';

//个人管理——投诉提问
import ComplainAndAskPage from './routes/selfManagement/ComplainAndAskPage';
//个人管理——提问列表——提问详情
import AskDetailsPage from './routes/selfManagement/AskDetailsPage';
//个人管理——投诉列表——投诉详情
import ComplaintDetailsPage from './routes/selfManagement/ComplaintDetailsPage';

//个人管理——消息中心
import MessageCenterPage from './routes/selfManagement/MessageCenterPage';
//个人管理——账号设置
import AccountSettingPage from './routes/selfManagement/AccountSettingPage';
//个人管理——我的订单
import MyOrderPage from './routes/selfManagement/MyOrderPage';
//个人管理——我的订单——课程详情
import OnlineCourseDetailPage from './routes/selfManagement/OnlineCourseDetailPage';
//个人管理——订单支付
import PayOrderPage from './routes/selfManagement/PayOrderPage';

//我的教务——联系记录
import ContactRecordsPage from './routes/myEducationAffairs/ContactRecordsPage';
//我的教务——我的成绩
import MyGradePage from './routes/myEducationAffairs/MyGradePage';
//我的教务——我的书籍
import MyBookPage from './routes/myEducationAffairs/MyBookPage';
//我的教务——我的报考
import MyExamPage from './routes/myEducationAffairs/MyExamPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} title="个人中心-登录" />
      <Route path="login" component={Login} title="个人中心-登录" />
      <Route path="home" component={HomePage} />
      <Route path="mockexam/:examId" component={MockExamInfoPage} title="试卷信息" />
      <Route path="doexcersise/:examId" component={DoExcercisePage} title="试卷信息" />
      <Route path="coursedetail/:courseId" component={OnlineCourseDetailPage} title="课程详情" />
      <Route path="ordercharge/:orderId" component={PayOrderPage} title="立即支付" />
      <Route path="/" component={IndexPage} >
        <IndexRoute component={ConsolePage} />
        <Route path="console" component={ConsolePage} />

        <Route path="classmanage" component={ClassManagePage} />
        <Route path="classrecord" component={ClassRecordPage} />

        <Route path="starttest/:disciplineId" component={StartTestingPage} />
        <Route path="selectcourse" component={SelectCoursePage} />
        <Route path="testtab/:disciplineId" component={StartTestTabPage} />

        <Route path="testrecord" component={TestingRecordPage} />

        <Route path="payfees" component={PayFeesPage} />
        <Route path="recharge" component={RechargePage} />
        <Route path="rechargedetails" component={RechargeDetailsPage} />
        <Route path="payway" component={SelectPayWayPage} />
        <Route path="paysuccess" component={PaySuccessPage} />

        <Route path="complaint" component={ComplainAndAskPage} />
        <Route path="askdetails/:id" component={AskDetailsPage} />
        <Route path="compliantdetails/:id" component={ComplaintDetailsPage} />
        <Route path="messagecenter" component={MessageCenterPage} />
        <Route path="account" component={AccountSettingPage} />
        <Route path="order" component={MyOrderPage} />

        <Route path="contactrecords" component={ContactRecordsPage} />
        <Route path="mygrade" component={MyGradePage} />
        <Route path="mybook" component={MyBookPage} />
        <Route path="myexam" component={MyExamPage} />

      </Route>

    </Router>
  );
}

export default RouterConfig;
