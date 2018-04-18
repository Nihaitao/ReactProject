import request from '../utils/request';


export async function fetchAskComplaint(data) {
    const options = {};
    options.params = {
      DataType_ID: data.typeId,
      isID: 2
    };
    options.method = "get";
    options.url = "/edu/Workorders/GetSworkorderxs";
    return request(options);
  }


export async function fetchAskComplaintDetail(data){
  // /edu/Workorders/GetSworkorderdh?ID=97&DataType_ID=2
  const options = {};
  options.params = {
    DataType_ID: data.typeId,
    ID: data.id
  };
  options.method = "get";
  options.url = "/edu/Workorders/GetSworkorderdh";
  return request(options);
}


export async function postAskComplaint(data){
  const options = {};
  options.params = {
    DataType_ID: data.typeId,
    Title: data.content
  };
  options.method = "post";
  options.url = "/edu/Workorders/GetSworkorderxsXX";
  return request(options);
}