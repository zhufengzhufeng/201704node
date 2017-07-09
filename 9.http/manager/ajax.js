function ajax({url='',type='text',method='GET',async=true,data={}}) {
    return new Promise(function (resolve,reject) {
        let xhr = new XMLHttpRequest();
        xhr.responseType = type;
        xhr.open(method,url,async);
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (err) {
            reject(err);
        };
        xhr.send(JSON.stringify(data));
    });
}