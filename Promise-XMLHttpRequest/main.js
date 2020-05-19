function searchBooks() {
    document.querySelector('.dataSearch').addEventListener('click', function () {

        let formSearch = document.forms['searchBook'];
        let inputValue = formSearch.inputData.value;
        new Promise(function (reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', `https://api.itbook.store/1.0/search/${inputValue}`);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let parseData = JSON.parse(this.responseText);
                    document.querySelector('.data').innerHTML = parseData;
                } else {
                    reject(Error(document.querySelector('.data').innerHTML = xhr.responseText));
                }
            };

            promise.then(data => {
                if (data.length > 0) {
                    document.querySelector('.data').innerHTML = 'books found'
                } else {
                    document.querySelector('.data').innerText = 'no data'
                }
                formSearch.reset();
            })
        });
    },
    )}
