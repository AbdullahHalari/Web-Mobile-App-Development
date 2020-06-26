function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}
function clearone() {
    var getnumber = document.getElementById("input");
    var str = input.value;
    var num = str.length;
    var str1 = str.slice(0, num - 1);
    input.value = str1;
}