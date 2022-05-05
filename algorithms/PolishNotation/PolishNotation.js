function ConvertString(string) {
  const rawArr = [...string];
  const elementsPolishNotation = [];
  let currentElement = '';

  for (let i = 0; i < rawArr.length; i++) {
    if (rawArr[i] == ' ') {
      continue;
    }
    if (rawArr[i] == '+' || rawArr[i] == '-' || rawArr[i] == '*' || rawArr[i] == '/') {
      elementsPolishNotation.push(rawArr[i]);
      continue;
    }
    if (i < rawArr.length - 1 && (!isNaN(rawArr[i + 1]) || rawArr[i + 1] == '.') && rawArr[i + 1] != ' ') {
      currentElement += rawArr[i];
      continue;
    }
    if (currentElement != '') {
      currentElement += rawArr[i];
      elementsPolishNotation.push(currentElement);
      currentElement = '';
      continue;
    }
    elementsPolishNotation.push(rawArr[i]);
  }

  return elementsPolishNotation;
}

function CalculatePolishNotation(arr) {
  if (arr.length == 1) {
    return arr[0];
  }

  const numbersPolishNotation = [];
  let currentElement;

  while (arr.length > 0) {
    currentElement = arr.pop();
    if (currentElement == '+' || currentElement == '-' || currentElement == '*' || currentElement == '/') {
      let resultOperation;
      switch (currentElement) {
        case '+':
          {
            resultOperation = parseFloat(numbersPolishNotation.pop()) + parseFloat(numbersPolishNotation.pop());
            break;
          }
        case '-':
          {
            resultOperation = parseFloat(numbersPolishNotation.pop()) - parseFloat(numbersPolishNotation.pop());
            break;
          }
        case '*':
          {
            resultOperation = parseFloat(numbersPolishNotation.pop()) * parseFloat(numbersPolishNotation.pop());
            break;
          }
        case '/':
          {
            resultOperation = parseFloat(numbersPolishNotation.pop()) / parseFloat(numbersPolishNotation.pop());
            break;
          }
      };
      numbersPolishNotation.push(resultOperation);
      continue;
    }
    numbersPolishNotation.push(currentElement);
  }
  return Math.floor(numbersPolishNotation[0] * 100) / 100;
}

let PolishNotation = '+ - 10 27 0';

document.getElementById('polishNotation').innerHTML = 'Польская запись: ' + PolishNotation;
PolishNotation = ConvertString(PolishNotation);
document.getElementById('result').innerHTML = 'Результат: ' + CalculatePolishNotation(PolishNotation);