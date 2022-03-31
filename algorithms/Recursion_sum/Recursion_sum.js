var Arr = [];
fill_array(Arr, 5);

function fill_array(arr, count) {
  for(var i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
}

function sum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sum_recursion(arr) {
  if(arr.length == 0) return 0;
  return arr[0] + sum(Arr.splice(1));
}

document.getElementById('name').innerHTML = 'Посчитать сумму с помощью рекурсии';
document.getElementById('sum').innerHTML = 'Сумма элементов массива [' + Arr + '] =' + sum(Arr);
document.getElementById('sum_recursion').innerHTML = 'Сумма элементов массива посчитанная рекурсией [' + Arr + '] =' + sum_recursion(Arr);