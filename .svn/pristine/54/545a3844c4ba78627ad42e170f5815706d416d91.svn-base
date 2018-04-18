/**
 * Created by sunxia on 2018/03/29.
 */

import request from '../utils/request';

export async function fetchCourse(data) {
  debugger;
  const options = {};
  options.method = "get";
  options.url = "/datastore/Discipline/GetAllDisciplineForStudent";
  return request(options);
}

export async function fetchQuestionStoreList(data) {
  const options = {};
  options.method = "get";
  options.url = "/datastore/Question/GetQuestionStoreList";
  options.params = {
    disciplineId:data.ID,
    Valid:1
  };
  return request(options);
}

export async function fetchChapterQuestion(data) {
  const options = {};
  options.method = "get";
  options.url = "/datastore/Chapter/GetChapterQuestion";
  options.params = {
    storeId:data.ID
  };
  return request(options);
}

export async function fetchExamPaper(data) {
  const options = {};
  options.method = "get";
  options.url = "/datastore/ExamPaper/GetExamPaperList";
  options.params = {
    Store:data.ID,
    Type:data.type,
    DoType:-1,
    valid:1
  };
  return request(options);
}

export async function fetchExamInfo(data) {
  const options = {};
  options.method = "get";
  options.url = "/datastore/ExamPaper/GetExamPaper";
  options.params = {
    ID:data.ID
  };
  return request(options);
}

export async function fetchPaperType(data) {
  const options = {};
  options.method = "get";
  options.url = "/datastore/ExamPaper/GetExamPaperType";
  options.params = {
    examPaperId:data.ID
  };
  return request(options);
}

export async function fetchExamPaperQuestions(data) {
  const options = {};
  options.method = "get";
  options.url = "/datastore/ExamPaper/GetExamPaperQuestions";
  options.params = {
    examPaperId:data.ID
  };
  return request(options);
}






