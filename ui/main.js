console.log('Loaded!');
//change the text using main-text
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//to move madi image
var img = document.getElementById('madi');
img.onclick = function() {
img.style.marginleft='2100px';
}