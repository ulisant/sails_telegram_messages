function suma(n1,n2) {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var res = parseFloat(num1) + parseFloat(num2);
  document.getElementById('resul').value = res
}
function rest(n1,n2) {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var res = parseFloat(num1) - parseFloat(num2);
  document.getElementById('resul').value = res
}
function divi(n1,n2) {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var res = parseFloat(num1) / parseFloat(num2);
  document.getElementById('resul').value = res
}
function mult(n1,n2) {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var res = parseFloat(num1) * parseFloat(num2);
  document.getElementById('resul').value = res
}
function resid(n1,n2) {
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var res = parseFloat(num1) % parseFloat(num2);
  document.getElementById('resul').value = res
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
