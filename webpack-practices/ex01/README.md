## webpack-practice : ex01
1. 프로젝트 생성

``` bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cli express
```

2. 빌드하기
```bash
$ npx webpack ./src/index.js -o /public
```
./public/main.js 로 번들링 됨


3. test server 실행

```bash
$ node dev-server.mjs
```
ES6 모듈로 실행(확장자를 .mjs) 해야 함.

