# The http module of Doo docs
****
## How to use?
* For **get** , this is a simple example
```js
http.get("https://example.com/api")
    .then(response => {
        console.log("GET Response:", response);
    })
    .catch(error => {
        console.error("GET Error:", error);
    });
```
else it , The function also has more parameters
```parameter
url,
request_header = ["Content-Type", "application/json"],
timeout_time = 2000 /* ms */,
true_status_code = 200
```

* For **post** ,this is a simple example
```js
http.post("https://example.com/api", JSON.stringify({ key: "value" }))
    .then(response => {
        console.log("POST Response:", response);
    })
    .catch(error => {
        console.error("POST Error:", error);
    });
```
else it , The function also has more parameters
```parameter
url, 
post_content, 
request_header = ["Content-Type", "application/json"],
timeout_time = 2000 /* ms */, 
true_status_code = 200
```

****

## Tips
* the docs only include [**"core/http/http_export.js"**](../core/http/http_export.js) , so if you include the "Doo.min.js" , you must change the script of docs's **http.** to **doo.http.**