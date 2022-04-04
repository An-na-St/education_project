var count = Math.floor(Math.random() * 10);
var Arr = [];
fill_array(Arr, count);

function fill_array(arr, count) {
  for(var i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
}

function arr_length(arr) {
  if(arr[0] == null) return 0;
  return 1 + arr_length(arr.splice(1));
}

document.getElementById('name').innerHTML = 'Считаем количество элементов в массиве без использования метода length';
document.getElementById('arr_length').innerHTML = 'Количество элементов в массиве [' + Arr + '] посчитанное рекурсией = ' + arr_length(Arr);