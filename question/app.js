// Q1

let nickname = 'あずまかなこ';
let age = 23;

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

// Q2

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

console.log('私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。');

// Q3

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

// Q5

let sum = playerList[0].age + playerList[1].age;

sum += playerList[2].age;

let average = sum / 3;

console.log(average);

// Q6

function sayHello(){
  console.log('Hello');
}

sayHello();

let sayWorld = function (){
  console.log('World');
}

sayWorld();

// Q7

user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday: '2000-09-27',
  sayHello: function (){
    console.log('Hello!');
  }
};
user.sayHello();
