function http_post(url, post_content, request_header = ["Content-Type", "application/json"], timeout_time = 2000 /* ms */, true_status_code = 200, callback) {
    const http_connect = {
        request: new XMLHttpRequest(),
        return_value: []
    };

    http_connect.request.open("POST", url, true); // connect
    
    // init header
    request_header.forEach(header => {
        http_connect.request.setRequestHeader(header[0], header[1]);
    });
    // init header

    // request timeout
    http_connect.request.timeout = timeout_time;
    http_connect.request.ontimeout = function () {
        http_connect.return_value.push("timeout!");
        callback(http_connect.return_value);
    };

    // request answer
    http_connect.request.onreadystatechange = function () {
        if (http_connect.request.readyState === 4) { // request ok
            if (http_connect.request.status === true_status_code) { // check status
                http_connect.return_value.push(http_connect.request.responseText);
                callback(http_connect.return_value);
            } else {
                http_connect.return_value.push("status is bad", http_connect.request.responseText);
                callback(http_connect.return_value);
            }
        }
    };

    http_connect.request.send(post_content);
}

export { http_post }