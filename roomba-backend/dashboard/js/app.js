//document.getElementById('getter').addEventListener('click', loadTxt);
window.setInterval(loadTxt, 4000);

function loadTxt() {
    fetch('../main/message')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            console.log(data);
            document.getElementById('textarea').innerHTML = data;
        })
        .catch(function(error) {
            console.log(error);
        })
}