'use strict'; // 블록 스코프 변수(ES6)

const users = [{
  no: 0,
  name: '마이콜',
  email: "michol@gmail.com"
}, {
  no: 1,
  name: "둘리",
  email: "dooly@gmail.com"
}]; // 객체분해(ES6)

const print = function ({
  no,
  name,
  email
}) {
  // 템플릿 문자열(ES6)
  console.log(`no : ${no} name : ${name}   email : ${email} `);
};

for (let user of users) {
  print(user);
}