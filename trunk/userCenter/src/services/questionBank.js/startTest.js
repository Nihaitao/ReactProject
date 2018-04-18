/**
 * Created by sunxia on 2018/03/29.
 */

import request  from '../utils/request'

export async function fetchCourse() {
  // const options ={};
  // options.method="get";
  // options.url="/datastore/Discipline/GetAllDisciplineForStudent";
  return request('get','/datastore/Discipline/GetAllDisciplineForStudent');
}
