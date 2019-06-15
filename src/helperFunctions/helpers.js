// this file contains the functions that will be used by different components

// get the value of the URL's parameter
// request: none
// parameters:
//        paramName     string
//        URLparameters string
export function getUrlParameter(paramName, URLparameters) {
  paramName = paramName.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + paramName + "=([^&#]*)");
  let results = regex.exec(URLparameters);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
