var http = require("http")
var fetch = require("node-fetch")
fetch("http://0.0.0.0:8081/",{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify(
        {"hsp_id":"004",
        "hsp_name":"JKL",
        "hosp_dept": "Gynecologist",
        "hsp_timings": "9:00 to 20:00"})
})
.then(response=>console.log(response));