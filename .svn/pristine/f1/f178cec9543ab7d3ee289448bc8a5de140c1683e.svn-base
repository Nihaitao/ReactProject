import request from '../utils/request';

export async function MyLessons(params) {//已购买课程列表
  const options = {};
  options.method = "get";
  options.url = "/datastore/Order/GetMyCourseList";//PageIndex=1&PageSize=10&PageStatus=1
  options.params = params;
  return request(options);
}


export async function MyQuestions(params) {//我的答疑
  const options = {};
  options.method = "get";
  options.url = "/datastore/CourseInterlocution/GetMyCourseInterlocution";
  options.params = params;
  return request(options);
}
export async function MyQuestionDetail(params) {//我的答疑
  const options = {};
  options.method = "get";
  options.url = "/datastore/CourseInterlocution/GetCourseInterlocutionList";
  options.params = params;
  return request(options);
}

export async function MyNotes(params) {//我的笔记  ??暂无接口
  const options = {};
  options.method = "get";
  options.url = "/datastore/CourseInterlocution/GetMyCourseInterlocution";
  options.params = params;
  return request(options);
}

export async function MyComments(params) {//我的评论
  const options = {};
  options.method = "get";
  options.url = "/datastore/CourseInterlocution/GetMyCourseComment";
  options.params = params;
  return request(options);
}


export async function MyLessonRecords(params) {//我的听课记录
  const options = {};
  options.method = "get";
  options.url = "/datastore/WebCourse/GetCourseLookInfo";
  options.params = params;
  return request(options);
}