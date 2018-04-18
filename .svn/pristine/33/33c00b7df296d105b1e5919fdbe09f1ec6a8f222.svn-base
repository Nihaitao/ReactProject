import request from '../utils/request';

export async function fetchStudentInfoSet(data) {
    const options = {};
    options.method = "get";
    options.url = "/edu/Student/GetStudentInfoSet";
    return request(options);
}

export async function fetchHDictionaryList(data) {
    const options = {};
    options.params = {
        Valid: 1,
        ColumnName: 'Education_ID'
    }
    options.method = "get";
    options.url = "/public/HDictionary/GetHDictionaryList";
    return request(options);
}

export async function EditStudentInfoByStuId(data) {
    const options = {};
    options.params = {
        Name: data.Name,
        CardNumber: data.CardNumber,
        Phone: data.Phone,
        Education_ID: data.Education_ID,
    }
    options.method = "post";
    options.url = "/edu/Student/EditStudentInfoByStuId";
    return request(options);
}

