/**
 * Created by sunxia on 2018/03/29
 */

import request from '../utils/request';

export async function fetchLogin(params) {
  let options = {};
  options.method = "post";
  options.url = "/edu/Student/BindStudentLoginByCardNumber";
  options.params = params;
  return request(options)
}

export async function fetchLoginByPhone(params){
  let options = {};
  options.method = "post";
  options.url = "/edu/Student/BindStudentLoginByPhone";
  options.params = params;
  return request(options)
}

export async function fetchPhoneCode4Login(params){
  let options = {};
  options.method = "post";
  options.url = "/edu/Student/SendPhoneCodeBYLogin";
  options.params = params;
  return request(options)
}
