//window.setInterval(dashboardlink, 4000);
$(document).ready(dashboardlink);

function dashboardlink() {

    fetch('main/urldashboard')
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            console.log(data);

            document.getElementById('dashboard').setAttribute("href", `${data}`);
            document.getElementById('dashboardbutton').setAttribute("href", `${data}`);
        })
        .catch(function(error) {
            console.log(error);
        })
}