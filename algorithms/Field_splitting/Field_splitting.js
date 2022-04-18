function field_splitting(big, ltl) {
  if(big%ltl == 0) return ltl;
  return field_splitting(ltl, big%ltl);
}

function get_result(first_side, second_side) {
  if(first_side <= 0 || second_side <= 0) {
    return 'Поля нет!';
  }
  
  var answer = 'Чтобы поле размером ' + first_side + ' x ' + second_side + ' разбить на одинаковые квадраты максимального размера, нужно взять квадрат со стороной: ';
  
  if(first_side > second_side) {
    return answer + field_splitting(first_side, second_side);
  } else {
    return answer + field_splitting(second_side, first_side);
  }
}

var first_side = parseFloat(prompt('Введите первую сторону поля', 1680));
var second_side = parseFloat(prompt('Введите вторую сторону поля', 640));
document.getElementById('result').innerHTML = get_result(first_side, second_side);