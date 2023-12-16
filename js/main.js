//https://cf.ztxh-bj.com//bookimages/2794/479424
// https://cf.ztxh-bj.com//bookimages/2794/479425
// https://cf.ztxh-bj.com//bookimages/2794/479427
// https://cf.ztxh-bj.com//bookimages/2794/479429
// https://cf.ztxh-bj.com//bookimages/2794/486772


//实例化一个对象 xhr
var xhr = new XMLHttpRequest(),
    method ="GET",
    url ="https://cf.ztxh-bj.com//bookimages/2794/",
    statr = 479424,
    end = 479429;
var main = document.getElementById("main");

try {
    for (var i = statr; i <= end; i++) {
        xhr.open(method, url + i + "/0.html", false);
        xhr.onreadystatechange = function () {

            if (xhr.status === 200 && xhr.readyState === 4) {
                for (var j = 1; j <= 57; j++) {
                    // xhr = new XMLHttpRequest();
                    xhr.open(method, url + i + "/" + j + ".html", false);
                    xhr.onreadystatechange = function () {
                        if (xhr.status === 200 && xhr.readyState === 4) {
                            var htmlImageElement = document.createElement("img");
                            htmlImageElement.src = xhr.responseText
                            main.appendChild(htmlImageElement)
                        }
                    }
                    xhr.send();
                }
            }
        }
        xhr.send();
    }
} catch (e) {
}
