let firstNum = '';
let secondNum = '';
let operator = null;
let result = '';


const add = (num1, num2) => {
  return num1 + num2;
}

const subtract = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
  return num1 / num2;
}

const modulus = (num1, num2) => {
  return num1 % num2;
}

const operate = (operator, num1, num2) => {
  return operator(num1, num2);
}

const checkNumbers = (num) => {
  if (operator === null) {
    firstNum += num;
  } else {
    secondNum += num;
  }
}

const checkNumClicked = (num) =>{

}

const clearBtn = document.querySelector('.clear');
const equalsBtn = document.querySelector('.equals');
const signBtn = document.querySelector('.sign');
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

const number = document.createElement('p');

equalsBtn.addEventListener('click', () => {
  screen.textContent = 0;
  screen.textContent = operate(operator, firstNum, secondNum)
});

addBtn.addEventListener('click', () => {
  operator = add;
})

subtractBtn.addEventListener('click', () => {
  operator = subtract;
})

multiplyBtn.addEventListener('click', () => {
  operator = multiply;
})

divideBtn.addEventListener('click', () => {
  operator = divide;
})

modulusBtn.addEventListener('click', () => {
  operator = modulus;
})

clearBtn.addEventListener('click', () => {
  firstNum = '';
  secondNum = '';
  operator = null;
  screen.textContent = '0';
});

signBtn.addEventListener('click', () => {

});

zeroBtn.addEventListener('click', () => {
  screen.textContent = 0;
  checkNumbers(0);
});

oneBtn.addEventListener('click', () => {
  checkNumbers('1');
  screen.textContent = firstNum
})

twoBtn.addEventListener('click', () => {
  screen.textContent = 2;
  checkNumbers(2);
});

threeBtn.addEventListener('click', () => {
  screen.textContent = 3;
  checkNumbers(3);
});

fourBtn.addEventListener('click', () => {
  screen.textContent = 4;
  checkNumbers(4);
});

fiveBtn.addEventListener('click', () => {
  screen.textContent = 5;
  checkNumbers(5);
});

sixBtn.addEventListener('click', () => {
  screen.textContent = 6;
  checkNumbers(6);
});

sevenBtn.addEventListener('click', () => {
  screen.textContent = 7;
  checkNumbers(7);
});

eightBtn.addEventListener('click', () => {
  screen.textContent = 8;
  checkNumbers(8);
});

nineBtn.addEventListener('click', () => {
  screen.textContent = 9;
  checkNumbers(9);
});

console.log(firstNum)
console.log(secondNum)
console.log(operator)
