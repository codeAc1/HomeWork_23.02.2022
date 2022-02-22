

function del() {
    var str = document
        .getElementById("inp2")
        .value;
      
    if (!str.trim(' ')) {
        alert("input boşdur")
    } 
    else {
        var result = str.slice(0, -1)
        document.getElementById('inp2').value = result;
    }

} 



function Change() {
    var str = document
        .getElementById("inp")
        .value;
      
    if (!str.trim(' ')) {
        alert("bos olmaz")
    } else {
        
        var body = document.getElementById('body');
        body.setAttribute('class',str)
        document.getElementById('inp').value = "";
    }

} 
function red() {
    var str = document
        .getElementById("red")
        .textContent;
      
        document.getElementById('inp').value = str;

} 
function black() {
    var str = document
        .getElementById("black")
        .textContent;
      
        document.getElementById('inp').value = str;

} 

function green() {
    var str = document
        .getElementById("green")
        .textContent;
      
        document.getElementById('inp').value = str;

} 

function yellow() {
    var str = document
        .getElementById("yellow")
        .textContent;
      
        document.getElementById('inp').value = str;

} 
function white() {
    var str = document
        .getElementById("white")
        .textContent;
      
        document.getElementById('inp').value = str;

} 






