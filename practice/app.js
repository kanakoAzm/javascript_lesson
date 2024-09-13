
// // console.log('Hello World!');

// // let text = 'Javascriptの練習';
// // console.log(text);

// // text = 'Javascriptをマスターした';
// // console.log(text);

// // let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// // console.log(longText);
// // console.log(longText);
// // console.log(longText);

// // console.log(
//   // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// // );
// // console.log(
//   // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// // );
// // console.log(
//   // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// // );

// // let name = 'ジョニー';
// // let greet = '私は' + name + '!';
// // console.log(greet);

// // let template = 'テンプレートリテラル';
// // let templateText = `これが${template}です。
// // ${template}は改行もできます。`;
// // console.log(templateText);

// // let num = 10;
// // console.log(num);

// // let numTen = 10;
// // let strTen = '10';
// // console.log(numTen, strTen);

// // let minus = -10;
// // let decimal = 1.1;
// // console.log(minus, decimal);

// // let num1 = 25;
// // let num2 = 2;
// // console.log(num1 + num2);

// // let names = ['John', 'Bob', 'Michael', 'Emma'];
// // console.log(names[0]);

// // let emptyNames = [];

// // emptyNames[0] = 'John';
// // emptyNames[1] = 'Bob';
// // emptyNames[2] = 'Michael';
// // emptyNames[3] = 'Emma';
// // console.log(emptyNames, emptyNames.length);

// // let radius = 2;
// // let circle = radius * radius * 3.14;
// // console.log('円の面積は' + circle + 'です');

// // function getArea() {
//   // let radius = 2;
//   // let circle = radius * radius * 3.14;
//   // console.log('円の面積は' + circle + 'です');
// // }

// // getArea();
// // getArea();
// // getArea();

// // function getArea(radius) {
//   // let circle = radius * radius * 3.14;
//   // console.log('円の面積は' + circle + 'です');
// // }

// // getArea(5);

// // function getArea(radius) {
//   // let circle = radius * radius * 3.14;
//   // return circle;
// // }

// // console.log('円の面積は' + getArea(5) + 'です');
// // console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

// // function doFunc(callback) {
//   // console.log('doFuncが呼び出されました');
//   // callback();
// // }

// // doFunc(function() {
//   // console.log('コールバック関数が呼び出されました');
// // });

// // let John = {
//   // name: 'John',
//   // age: 26,
//   // bloodType: 'A',
//   // favorite: 'card',
//   // sing: function() {
//     // console.log('LA~LA~LA~~~♪');
//   // }
// // };

// // John.sing();

// // let userAge = 0;
// // myFunc();

// // function myFunc() {
//   // userAge = 27;
//   // console.log(userAge);
// // }

// // console.log(userAge);

// // if (false) {
//   // console.log('trueです!');
// // }
// // console.log('処理が終わりました');

// // let tall = 185;
// // if (tall >= 180) {
//   // console.log('高身長です');
// // }

// // let val = 26;
// // console.log(val >= 20);
// // console.log(val === '26');
// // console.log(val == '26');
// // console.log('hello' === 'world');

// let myAge = 12;
// if (myAge >= 35) {
//   console.log('健康診断でバリウムを飲みます');
// } else if (myAge >= 20) {
//   console.log('お酒が飲めます');
// } else if (myAge >= 18) {
//   console.log('選挙権があります');
// } else {
//   console.log('子どもです');
// }

// let loto = 9;

// if (loto === 7 || loto === 8) {
//   console.log('当たり');
// } else {
//   console.log('ハズレ');
// }

// let numVal = 7;
// let strVal = 'text'

// console.log(numVal === 7 && strVal === 'text');

// let errMsg = '';

// errMsg === '' ? console.log('ない!') : console.log('ある!');

// if (1) {
//   console.log('hoge');
// }

// if (0) {
//   console.log('piyo');
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i + '回目のコンソール');
// }

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);