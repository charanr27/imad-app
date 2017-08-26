var button = document.getElementById("count");
var counter = 0;
button.oneclick = function () {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};