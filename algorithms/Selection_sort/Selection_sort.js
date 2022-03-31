function selection_sort_var1(A1) {
  var A2 = [];
  var min, index; // 'min' во всей ф-ии заменить на 'max' для сортировки по убыванию

  while(A1.length != 0) {
    min = A1[0];
    index = 0;

    for(var i = 0; i < A1.length; i++) {
      if(A1[i] < min) { // '<' заменить на '>' для сортировки по убыванию
        index = i;
        min = A1[i];
      }
    }
    A2.push(min);
    A1.splice(index, 1);
  }
  return A2;
}

function selection_sort_var2(arr) {
  var min, index, temp;

  for(var i = 0; i < arr.length; i++) {
    min = arr[i];
    index = i;
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[j] < min) {
        index = j;
        min = arr[j];
      }
    }
    temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }
  return arr;
}

function fill_array(arr, count) {
  for(var i = 0; i < count; i++) {
    arr.push(Math.floor(Math.random() * 21));
  }
}

var count = 10;
var array = [];

fill_array(array, count);

document.getElementById('name').innerHTML = 'Сортировка выбором';
document.getElementById('arr_before_sort').innerHTML = 'Массив до сортировки: [' + array + ']';
document.getElementById('arr_after_sort').innerHTML = 'Массив после сортировки: [' + selection_sort_var2(array) + ']';
