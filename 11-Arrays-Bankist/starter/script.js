'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

function displayMovements(movement) {
  containerMovements.innerHTML = '';

  movement.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements);

function calPrintBalance(movements) {
  const balance = movements.reduce(function (acc, cur) {
    return (acc += cur);
  }, 0);
  labelBalance.textContent = `${balance} EUR`;
}
calPrintBalance(account1.movements);

const displaySum = function createUserNames(accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
console.log(accounts);

const myself = 'Promise Morka';
const outputOfSelf = myself
  .toLowerCase()
  .split(' ')
  .map(function (name) {
    return name[0];
  })
  .join('');

console.log(outputOfSelf);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(`------for of method-----`);
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You made a deposit of ${movement}`);
//   } else {
//     console.log(`You made a withdrawal of ${Math.abs(movement)}`);
//   }
// }

// console.log('------forEach method');
movements.forEach(function (mov) {
  if (mov > 0) {
    console.log(`You made a deposit of ${mov}`);
  } else {
    console.log(`You made a withdrawal of ${Math.abs(mov)}`);
  }
});

// console.log(`------for of method-----`);
// const names = ['Jo', 'Ab', 'Ay', 'Obi'];
// for (const name of names) {
//   console.log(`${name} is a great person`);
// }

// console.log('------forEach method');
// names.forEach(function (name) {
//   console.log(`${name} is a great person`);
// });

// const programmingLanguages = ['Java', 'JavaScript', 'Python', 'C'];

// console.log(`------for of method-----`);
// for (const [i, language] of programmingLanguages.entries()) {
//   console.log(`Language at position ${i + 1} is ${language}`);
// }

// console.log('------forEach method---------');
// programmingLanguages.forEach(function (language, index, array) {
//   console.log(`Language at position ${index + 1} is ${language}.`);
// });

// console.log('------MAP method-------');
// movements.forEach(function (movement) {
//   if (movements > 0) {
//     console.log(`You made a deposit of ${movement}`);
//   } else {
//     console.log(`You made a withdrawal of ${Math.abs(movement)}`);
//   }
// });

const result = movements.map(
  (mov, index) =>
    // movements > 0
    //   ? console.log(`You made a deposit of ${movement}`)
    //   : console.log(`You made a withdrawal of ${Math.abs(movement)}`);

    `Movement ${index + 1}: You ${
      mov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(mov)}`
);

console.log(result);
