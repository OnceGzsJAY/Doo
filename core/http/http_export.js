import { http_get } from "./get.js";
import { http_post } from "./post.js";

class http {
    get(url ,request_header = ["Content-Type", "application/json"],timeout_time = 2000 /* ms */,true_status_code = 200) {
        return http_get(url ,request_header = ["Content-Type", "application/json"],timeout_time = 2000 /* ms */,true_status_code = 200);
    }

    post(url, post_content, request_header = ["Content-Type", "application/json"], timeout_time = 2000 /* ms */, true_status_code = 200) {
        return http_post((url, post_content, request_header = ["Content-Type", "application/json"], timeout_time = 2000 /* ms */, true_status_code = 200))
    }
}

export { http }