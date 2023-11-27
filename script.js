let firstNum = '';
let secondNum = '';
let operator = null;
let result = '';

const add = (num1, num2) => {
  return Number(num1) + Number(num2);
}

const subtract = (num1, num2) => {
  return Number(num1) - Number(num2);
}

const multiply = (num1, num2) => {
  return Number(num1) * Number(num2);
}

const divide = (num1, num2) => {
  return Number(num1) / Number(num2);
}

const modulus = (num1, num2) => {
  return Number(num1) % Number(num2);
}

const operate = (operator, num1, num2) => {
  return operator(Number(num1), Number(num2));
}

const firstOrSecondNum = () => {
  if (operator === null) {
    return 'firstNum';
  } else {
    return 'secondNum';
  }
}

const generateNums = (num) => {
  if (firstOrSecondNum() === 'firstNum') {
    if (firstNum.length < 8) {
      firstNum += String(num);
      screen.textContent = firstNum;
    }
  } else {
    if (secondNum.length < 8) {
      secondNum += String(num);
      screen.textContent = secondNum;
    }
  }
}

let operatorResult = (op) => {
  result = operate(op, firstNum, secondNum);

  if (secondNum === '0' && op === divide) {
    result = 'Idiot';
  }

  if (String(result).length > 8) {
    result = Math.round(result);
  }

  if (String(result).length > 8) {
    result = 'NaN';
  }

  screen.textContent = result;
  operator = null;
  secondNum = "";
  firstNum = result;
}

const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const signBtn = document.querySelector('.sign');
const decimalBtn = document.querySelector('.decimal');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');
const modulusBtn = document.querySelector('.modulus');
const zeroBtn = document.querySelector('.zero');
const oneBtn = document.querySelector('.one');
const twoBtn = document.querySelector('.two');
const threeBtn = document.querySelector('.three');
const fourBtn = document.querySelector('.four');
const fiveBtn = document.querySelector('.five');
const sixBtn = document.querySelector('.six');
const sevenBtn = document.querySelector('.seven');
const eightBtn = document.querySelector('.eight');
const nineBtn = document.querySelector('.nine');

const screen = document.querySelector('.display');

equalsBtn.addEventListener('click', () => {
  operatorResult(operator)
  screen.textContent = firstNum;
});

addBtn.addEventListener('click', () => {
  if (operator !== null) {
    operatorResult(add)
  } 
  operator = add;
});

subtractBtn.addEventListener('click', () => {
  if (operator !== null) {
    operatorResult(subtract)
  } 
  operator = subtract;
});

multiplyBtn.addEventListener('click', () => {
  if (operator !== null) {
    operatorResult(multiply)
  } 
  operator = multiply;
});

divideBtn.addEventListener('click', () => {
  if (operator !== null) {
    operatorResult(divide)
  } 
  operator = divide;
});

modulusBtn.addEventListener('click', () => {
  if (operator !== null) {
    operatorResult(modulus)
  } 
  operator = modulus;
});

clearBtn.addEventListener('click', () => {
  firstNum = '';
  secondNum = '';
  operator = null;
  result = '';
  screen.textContent = '0';
});

signBtn.addEventListener('click', () => {
  console.log(firstNum)
  if (firstOrSecondNum() === 'firstNum' && firstNum > 0) {
    firstNum = Number(firstNum) * -1;
    screen.textContent = firstNum;
  } else if (firstOrSecondNum() === 'firstNum' && firstNum < 0) {
    firstNum = Math.abs(Number(firstNum));
    screen.textContent = firstNum;
  } if (firstOrSecondNum() === 'secondNum' && Number(secondNum) > 0) {
    secondNum = Number(secondNum) * -1;
    screen.textContent = secondNum;
  } else if (firstOrSecondNum() === 'secondNum' && Number(secondNum) < 0) {
    secondNum = Math.abs(Number(secondNum));
    screen.textContent = secondNum;
  } 
  console.log(`first: ${firstNum}`);
  console.log(`second: ${secondNum}`);
});

decimalBtn.addEventListener('click', () => {
  if (firstNum !== '') {
    generateNums('.');
  } else if (secondNum !== '') {
    generateNums('.')
  }
});

zeroBtn.addEventListener('click', () => {
  generateNums('0');
});

oneBtn.addEventListener('click', () => {
  generateNums('1');
  console.log(firstNum)
  console.log(`second: ${secondNum}`)
});

twoBtn.addEventListener('click', () => {
  generateNums('2');
});

threeBtn.addEventListener('click', () => {
  generateNums('3');
});

fourBtn.addEventListener('click', () => {
  generateNums('4');
});

fiveBtn.addEventListener('click', () => {
  generateNums('5');
});

sixBtn.addEventListener('click', () => {
  generateNums('6');
});

sevenBtn.addEventListener('click', () => {
  generateNums('7');
});

eightBtn.addEventListener('click', () => {
  generateNums('8');
});

nineBtn.addEventListener('click', () => {
  generateNums('9');
});
