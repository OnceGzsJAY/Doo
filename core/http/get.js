function http_get(url ,request_header = ["Content-Type", "application/json"],timeout_time = 2000 /* ms */,true_status_code = 200) {
    return new Promise((resolve, reject) => {
        const http_connect = {
            request: new XMLHttpRequest(),
        };

        http_connect.request.open("GET" ,url ,true); // connect

        // init header
        request_header.forEach(header => {
            http_connect.request.setRequestHeader(header[0], header[1]);
        });
        // init header

        // timeout
        http_connect.request.timeout = timeout_time;
        http_connect.request.ontimeout = function () {
            reject("timeout!");
        };
        // timeout

        // request answer
        http_connect.request.onreadystatechange = function () {
            if (http_connect.request.readyState === 4) { // request ok
                if (http_connect.request.status === true_status_code) { // check status
                    resolve(http_connect.request.responseText);
                } else {
                    reject("status is bad. the responseText : " + http_connect.request.responseText);
                }
            }
        };
        // request answer

        http_connect.request.send();
    })
}

export { http_get }