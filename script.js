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

  // if (secondNum = '0' && operator === '/') {
  //   result = 'Idiot';
  // }

  if (firstNum !== '' && firstNum !== 0 && secondNum !== 0 && secondNum !== '') {
    result = operate(operator, firstNum, secondNum);
  }

  // if (operator !== null) {
  //   firstNum = result;
  //   //secondNum = '';
  // }
}

let operatorResult = (op) => {
  result = operate(op, firstNum, secondNum);

  if (String(result).length > 8) {
    result = Math.round(result);
    console.log(result)
  }

  if (String(result).length > 8) {
    result = 'NaN';
  }

  screen.textContent = result;
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
  if (String(result).length > 8) {
    result = result.toFixed(4);
    console.log(result)
  }
 
  screen.textContent = result;
  firstNum = result;
  operator = null;
  secondNum = "";
});

addBtn.addEventListener('click', () => {
  operator = add;
  operatorResult(operator);
})

subtractBtn.addEventListener('click', () => {
  operator = subtract;
  operatorResult(operator);
})

multiplyBtn.addEventListener('click', () => {
  operator = multiply;
  operatorResult(operator);
})

divideBtn.addEventListener('click', () => {
  operator = divide;
  operatorResult(operator);
})

modulusBtn.addEventListener('click', () => {
  operator = modulus;
  operatorResult(operator);
})

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
