

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





