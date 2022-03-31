function binary_search(arr, item) {
  var start = 0;
  var end = arr.length - 1;
  var center = 0;
  var guess = 0;
  
  
  while(start <= end) {
    center = parseInt((start + end)/2);
    guess = arr[center];
    if(item == guess) {
      return center;
    }
    if(item < guess) {
      end = center - 1;
    }
    else {
      start = center + 1;
    }
  }
  return null;
}

var number_search = 3;
var array = [0, 1, 3, 4, 6, 9, 16];
var result = binary_search(array, number_search);

document.getElementById('name').innerHTML = 'Бинарный поиск';
document.getElementById('result').innerHTML = 'Нашли искомый элемент ' + number_search + ' в массиве [' + array + '] под индексом ' + result;