// variables to contain DOM elements
const result = document.querySelector('.result__container');
const numbers = document.querySelectorAll('.key');
const operators = document.querySelectorAll('.operator');
const equalSign = document.getElementById('equal');
let resultContent = result.innerText;
let calculationTracking = [];

// Handle 0 - 9
numbers.forEach((num, idx) => {
  if (idx <= 9) {
    num.addEventListener('click', () => {
      // if still, zero is clicked, do none. Otherwise, concat' clicked num
      resultContent =
        resultContent === '0' ? num.innerText : resultContent + num.innerText;

      // limit result to be 25 digits long
      if (resultContent.length < 25) result.innerText = resultContent;
    });
  }
});

// Handle C
document.getElementById('k12').addEventListener('click', () => {
  // reset operators style
  operators.forEach((operator) => operator.classList.remove('chosen'));

  // reset result content to 0
  resultContent = '0';
  result.innerText = resultContent;
});

// Handle operators
operators.forEach((op) => {
  op.addEventListener('click', () => {
    // reset all styling first
    operators.forEach((operator) => operator.classList.remove('chosen'));

    // then style only the chosen one
    op.classList.add('chosen');

    // check result container
    calculationTracking = [resultContent, op.innerText];
    // if there has been an operator and users decide to change operator
    if (calculationTracking.length === 2) resultContent = '';
  });
});

// Handle '='
equalSign.addEventListener('click', () => {
  // handle operators styling
  operators.forEach((operator) => operator.classList.remove('chosen'));

  // handle calculation and display
  calculationTracking.push(resultContent);

  // evaluation calculation tracking
  resultContent = evaluationCalTracking(calculationTracking) + '';
  result.innerText = resultContent;
});

// Handle '.'
document.getElementById('k11').addEventListener('click', () => {
  // if current operand value does not have a '.'
  if (!resultContent.includes('.')) {
    resultContent += '.';
    result.innerText = resultContent;
  }
});

/*
  Function to evaluate calculation tracking array
*/
const evaluationCalTracking = (trackingArr) => {
  // evaluate if string operands are interger or float, and parse them accordingly
  let trackFirstOperand = parseIntOrFloat(trackingArr[0]);
  let trackSecondOperand = parseIntOrFloat(trackingArr[2]);

  switch (trackingArr[1]) {
    case '+':
      return trackFirstOperand + trackSecondOperand;
    case '—':
      return trackFirstOperand - trackSecondOperand;
    case '×':
      return trackFirstOperand * trackSecondOperand;
    case '÷':
      return trackFirstOperand / trackSecondOperand;
  }
};

/*
  Function to evaluate operands values and parse to Number
*/
const parseIntOrFloat = (targetNumStr) =>
  targetNumStr.includes('.')
    ? parseFloat(targetNumStr)
    : parseInt(targetNumStr);
