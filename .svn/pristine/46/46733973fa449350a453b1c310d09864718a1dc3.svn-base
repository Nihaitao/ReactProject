import dva from 'dva';
import 'babel-polyfill'
import createLoading from 'dva-loading'
import { browserHistory } from 'dva/router'
import { message } from 'antd'
import './index.css';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: browserHistory,
  onError (error) {
    message.error(error.message)
  },
});

// 2. Plugins
// app.use({});
  
// 3. Model
 app.model(require('./models/user'));//模态框控制
 app.model(require('./models/questionBank/startTest'));//用户信息
 app.model(require('./models/myEducationAffairs/contactRecords'));//我的教务——联系记录
 app.model(require('./models/myclass/myClass'));//我的教务——联系记录
 app.model(require('./models/selfManagement/messageCenter'));//个人管理——消息中心
 app.model(require('./models/homeData.js'));//首页信息
 app.model(require('./models/login'));//登录注册
 app.model(require('./models/paging'));//分页控制
 app.model(require('./models/selfManagement/order'));//订单管理
 app.model(require('./models/selfManagement/course'));//课程详情信息
 app.model(require('./models/selfManagement/studentInfo'));//个人信息
 app.model(require('./models/selfManagement/askComplaint'));//投诉提问
 app.model(require('./models/common/modals'));//模态框控制
 

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
