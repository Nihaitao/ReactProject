
import fetch from 'dva/fetch';
import axios from 'axios';
import { baseURL } from './config';
import { message } from 'antd';

export default function request(options) {
  var result = "";
  if (options.method === "get") {
   result = get(baseURL+options.url,options.params);
  }else{
    var result = post(baseURL+options.url,options.params);
    
  }

  return result;
}

export function get(url, params) {
  if (params) {
    let paramsArray = [];
    //encodeURIComponent  
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  return new Promise(function (resolve, reject) {
    fetch( url, {
      method: 'GET',
      credentials: 'include',
      // mode: "cors",
      // headers: {
      //   'Accept': 'application/json, text/plain, */*',
      //   'Content-Type': 'application/x-www-form-urlencoded',   
      //   'X-Host': 'wangxiaocenter.chutoukj.com',
      //   'Access-Control-Allow-Origin': '*'  
      // }
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          reject({ status: response.status })
        }
      })
      .then((response) => {
        
        resolve(response);
      })
      .catch((err) => {
        reject({ status: -1 });
      })
  })
}


export function post(url, formData, headers) {
  return new Promise(function (resolve, reject) {
    fetch(url, {
      method: 'POST',
      // mode: "cors",
      headers: {
        // 'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json; charset=utf-8',
        'X-Host': 'wangxiaocenter.chutoukj.com',
        'Access-Control-Allow-Origin': '*'

      },
      body: JSON.stringify(formData),
      credentials: 'include'
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          reject({ status: response.status })
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject({ status: -1 });
      })
  })
}


// export function get(url) {
//   var result = fetch(baseURL + url, {
//     // credentails: 'include',  
//     mode: "no-cors",
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'X-Host': 'wangxiaocenter.chutoukj.com',
//       'Access-Control-Allow-Origin': '*'

//     }
//   });
//   debugger;
//   return result;
// }

// export function post(url, params) {
//   var result = fetch(url, {
//     method: 'POST',
//     mode: "no-cors",
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'Content-Type': 'application/x-www-form-urlencoded',
//       'X-Host': 'wangxiaocenter.chutoukj.com',
//       'Access-Control-Allow-Origin': '*'
//     },
//     body: JSON.stringify(params)
//   })
//     .then((response) => response.json())
//     .then((responseJSON) => {
//       callback(responseJSON)
//     }).done();

//   return result;
// }







