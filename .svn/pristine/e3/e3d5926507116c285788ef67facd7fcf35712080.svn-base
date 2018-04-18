import {
  fetchCourse,
  fetchBanner, 
  fetchMenu,
  fetchDiscipline
} from '../../services/home';

export default {

  namespace : 'homeData',

  state : {
    courseList: [], //课程列表
    bannerList: [], //banner列表
    menuList: [], //中间右侧菜单列表
    disciplineList:[],//中间左侧科目列表
  },

  subscriptions : {
    setup({dispatch, history}) { // eslint-disable-line
      return history.listen(({pathname, query}) => {
        if (pathname === '/home') { //路由匹配
          dispatch({type: 'fetchCourseList'});
          dispatch({type: 'fetchBannerList'}); 
          dispatch({type: 'fetchMenuList'});
          dispatch({type: 'fetchDisciplineList'});
        }
      });
    }
  },

  effects : {
    *fetchCourseList({//获取 课程列表
      payload
    }, {call, put}) { 
      const data = yield call(fetchCourse);
      yield put({type: 'fetchCourseListSuccess', payload: data.Data});
    },
    *fetchBannerList({//获取 banner列表
      payload
    }, {call, put}) {
      const data = yield call(fetchBanner);
      yield put({type: 'fetchBannerSuccess', payload: data.Data})
    },
    *fetchMenuList({//获取 中间右侧菜单列表
      payload
    }, {call, put}) {
      const data = yield call(fetchMenu);
      yield put({type: 'fetchMenuSuccess', payload: data.Data})
    },
    *fetchDisciplineList({//获取 中间左侧科目列表
      payload
    }, {call, put}) {
      const data = yield call(fetchDiscipline);
      yield put({type: 'fetchDisciplineSuccess', payload: data.Data})
    },

  },

  reducers : {
    fetchCourseListSuccess(state, action) {
      return {
        ...state,
        courseList: action.payload
      };
    },
    fetchBannerSuccess(state, action) {
      return {
        ...state,
        bannerList: action.payload
      };
    },
    fetchMenuSuccess(state, action) {
      return {
        ...state,
        menuList: action.payload
      };
    },
    fetchDisciplineSuccess(state, action) {
      return {
        ...state,
        disciplineList: action.payload
      };
    },
  }
};
