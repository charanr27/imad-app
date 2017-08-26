console.log('Loaded!');
//change the text using main-text
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//to move madi image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
var intterval = setInterval(moveRight, 50);
};
var button = document.getElementById("counter");
var counter = 0;
button.oneclick = function () {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};