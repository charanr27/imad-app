
//submit name


var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        
        if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            alret("Logged in successfully");
        } else if (request.status === 403) {
             alert('Username/password is incorrect');
        } else if (request.status === 500) {
            alret('something went wrong on the server');
        }
        }
};
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
console.log(username);
console.log(password);
 request.open('POST', 'http://charansinghr27.imad.hasura-app.io/submit-name?name=' + name, true);
 request.setRequestHeader('Content-Type', 'application/json');
 request.send(JSON.stringfy({username: username, password: password}));
};