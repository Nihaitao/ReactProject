export const pageInit = {
			PageSize: 2,
			PageIndex: 1,
			PageStatus: 1,
}

export async function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export function  setCookie (name, value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  
  // document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + location.href.match(/((?:\w+\.){1}(?:cn|top|com\.cn|com\.tw|com))/)[1];
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain="+location.hostname;
}

export function  getCookie (c_name){
  if (document.cookie.length>0)
    {
    var c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
      { 
      c_start=c_start + c_name.length+1 
      var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return JSON.parse(unescape(document.cookie.substring(c_start,c_end)))
      } 
    }
  return null
}