import {message } from 'antd'
import * as tools from '../utils/tools'

export default {
  namespace: 'user',
  state: {
    id: null,
    info: null,
  },
  subscriptions : {
    setup({dispatch, history}) { // eslint-disable-line
      return history.listen(({pathname, query}) => {
        const studentinfo =tools.getCookie('studentinfo')
        if(studentinfo){//存在用户将数据
          dispatch({type: 'init', id: studentinfo.StuID, info: studentinfo});
          if (pathname === '/home') { //路由匹配
            // dispatch({type: 'fetchMyLessons', payload});
            dispatch({type: 'myClass/fetchMyLessonRecords'});
          }
        }
      })
    }
  },
  reducers: {
    init(state, action) {
      return {
        ...state,
        id: action.id,
        info: action.info,
      };
    },
    clean(){
      return {
        ...state,
        id: null,
        info: null,
      };
    }
  },
};

// User = {
//   "StuID" : "DC144DD0286C442794B4999AE67FECDE",
//   "System_Station_IDs" : 0,
//   "StuDetail_ID" : null,
//   "SignUp" : 0,
//   "SearchName" : null,
//   "SearchValue" : null,
//   "System_Station_ID" : 42,
//   "StuName" : null,
//   "CardNumber" : "432122198512281498",
//   "Phone" : "18570359831",
//   "Education_ID" : 0,
//   "Name" : "彭玉蓉",
//   "Sex" : null,
//   "AddTime" : null,
//   "Birthday" : null,
//   "HomeAddress" : null,
//   "Nation" : null,
//   "Nation_Name" : null,
//   "Police" : null,
//   "EffDate" : null,
//   "ExpDate" : null,
//   "HeadImg" : null,
//   "Education_Name" : null,
//   "Email" : null,
//   "QQ" : null,
//   "NowProvince_ID" : 0,
//   "NowCity_ID" : 0,
//   "NowArea_ID" : 0,
//   "NowProvince_Name" : null,
//   "NowCity_Name" : null,
//   "NowArea_Name" : null,
//   "NowAddress" : null,
//   "Remark" : null,
//   "Password" : null,
//   "LoginType" : null,
//   "LoginSource" : null,
//   "PhoneCode" : null,
//   "PhoneCodeValid" : 0,
//   "LastSendTime" : "0001-01-01T00:00:00",
//   "Model_ID" : 0,
//   "Specialty_ID" : 0,
//   "SpecialtyVersion_ID" : 0,
//   "Batch_ID" : 0,
//   "School_ID" : 0,
//   "IsDelete" : 0,
//   "Valid" : 0,
//   "Stationproxy_ID" : 0,
//   "SchoolRoll_ID" : 0,
//   "PageStatus" : 0,
//   "PageSize" : 20,
//   "PageIndex" : 0
// }
