import request from '../utils/request';

export async function fetchCourse(data) {//首页底部课程列表
  const options = {};
  options.method = "get";
  options.url = "/datastore/Discipline/GetAllRecommendCourse";
  return request(options);
}

export async function fetchBanner(data){//首页轮播
  const options = {};
  options.method = "get";
  options.url = "/public/Mechanism/GetBannerList";
  return request(options);
}

export async function fetchMenu(data){//首页中间科目列表
  const options = {};
  options.method = "get";
  options.url = "/public/Menu/GetMenuData";
  return request(options);
}

export async function fetchDiscipline(data){//首页中间左侧科目列表
  const options = {};
  options.method = "get";
  options.url = "/datastore/Discipline/GetAllDiscipline?IsRecommend=1&Valid=1";
  return request(options);
}