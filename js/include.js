window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;

                    // header 로드가 완료된 경우
                    if (includePath.includes('header.html')) {
                        // header.js 초기화 함수 호출
                        initHeader();
                    }
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});
