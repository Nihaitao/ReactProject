import request from '../utils/request';


export async function fetchCourseDetail(data) {
    const options = {};
    options.params = {
        ID: data.ID,
        Valid: 1
    };
    options.method = "get";
    options.url = "/datastore/WebCourse/GetCourseByID";
    return request(options);
  }

  export async function fetchCourseCatalogList(data) {
    const options = {};
    options.params = {
        Course_ID: data.ID,
         Valid: 1
    };
    options.method = "get";
    options.url = "/datastore/WebCourse/GetCourse_ChaptersNodeList";
    return request(options);
  }

  export async function fetchCourseDownloadList(data) {
    const options = {};
    options.params = {
      Course_ID: data.ID,
      PageIndex: 1,
      PageSize: 30,
      PageStatus: 1,
    };
    options.method = "get";
    options.url = "/datastore/DataInfo/GetDataInfoList";
    return request(options);
  }

  export async function fetchCourseCommentList(data) {
    const options = {};
    options.params = {
      Discipline_ID: data.DID,
      Course_ID: data.ID,
      PageIndex: 1,
      PageSize: 30,
      PageStatus: 1,
      Valid: 1
    };
    options.method = "get";
    options.url = "/datastore/CourseInterlocution/GetCourseCommentList";
    return request(options);
  }

  export async function fetchTeacherInfo(data) {
    const options = {};
    options.params = {
      Teacher_ID: data.ID
    };
    options.method = "get";
    options.url = "/datastore/Teacher/GetTeacherByID";
    return request(options);
  }