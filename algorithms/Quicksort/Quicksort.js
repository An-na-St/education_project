var count = Math.floor(Math.random() * 30);
var Arr = [];
fill_array(Arr, count);

function fill_array(arr, count) {
  for(var i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 30));
  }
}

function quicksort(arr) {
  if(arr.length < 2) return arr;

  var pivot_value = arr[0];
  var less = [];
  var greater = [];

  for(var i = 1; i < arr.length; i++) {
    if(arr[i] < pivot_value) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  arr.splice(0, arr.length);

  arr.push(...quicksort(less));
  arr.push(pivot_value);
  arr.push(...quicksort(greater));

  return arr;
}

document.getElementById('name').innerHTML = 'Быстрая сортировка';
document.getElementById('quicksort').innerHTML = 'Массив [' + Arr + '] после сортировки [' + quicksort(Arr) + ']';


