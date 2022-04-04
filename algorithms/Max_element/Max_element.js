var count = Math.floor(Math.random() * 10);
var Arr = [];
fill_array(Arr, count);

function fill_array(arr, count) {
  for(var i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
}

function max(arr) {
  if(arr.length == 0) return 'отсутствует'
  var max = arr[0];

  for(var i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

function max_element(arr) {
  if(arr.length == 0) return 'отсутствует';
  if(arr.length == 1) return arr[0];

  var guess = max_element(arr.splice(1));
  if(arr[0] > guess) {
    return arr[0];
  } else return guess;
}

document.getElementById('name').innerHTML = 'Ищем наибольший элемент в массиве.';
document.getElementById('max_element').innerHTML = 'В массиве [' + Arr + '] наибольший элемент ' + max(Arr);
document.getElementById('max_element_recursion').innerHTML = 'Наибольший элемент в массиве [' + Arr + '] найденный рекурсией ' + max_element(Arr);