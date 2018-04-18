import request from '../utils/request';

export async function fetchOrderList(data) {
  const options = {};
  options.params = {
    PayStatus:data.PayStatus,
    PageIndex:data.PageIndex,
    PageSize:data.PageSize,
    PageStatus:data.PageStatus
  };
  options.method = "get";
  options.url = "/datastore/Order/GetOrderDetailListByStuId";
  return request(options);
}


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

  export async function fetchOrderPayById(data) {
    const options = {};
    options.params = {
      orderId: data.ID
    };
    options.method = "get";
    options.url = "/datastore/Order/GetOrderPayById";
    return request(options);
  }

