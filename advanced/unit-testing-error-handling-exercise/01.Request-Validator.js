function requestValidator(obj) {
  let methods = ["GET", "POST", "DELETE", "CONNECT"];
  //   let uriPattern = /^[a-zA-Z0-9.]+$|^\*$/g;
  let uriPattern = /(^\*)|([\.\w]*\.[\w]*)|(^\w$)/g;
  let version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  let messagePattern = /^[^<>\\&'"]*$/g;

  if (methods.includes(obj.method) == false) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (obj.uri == undefined || uriPattern.test(obj.uri) == false) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (version.includes(obj.version) == false) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (obj.message == undefined || messagePattern.test(obj.message) == false) {
    throw new Error("Invalid request header: Invalid Message");
  }
  return obj;
}

let res = requestValidator(
    obj = {
        method: 'POST',
        uri: 'home.bash',
        message: 'rm -rf /*'}
                        );
console.log(res);

