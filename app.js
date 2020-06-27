function getnum(num) {
    var result = document.getElementById("answer")
    result.value += num;
}
function clearResult() {
    var result = document.getElementById("answer");
    result.value = "";
}
function getresult() {
    var result = document.getElementById("answer");
    result.value = eval(result.value);
}