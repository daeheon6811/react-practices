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
$ npx webpack
```
webpack.config.js 의 output 섹션에 정의된 ./public/bundle.js 로 번들링 됨

3. test server 실행
```bash
$ node der-server.mjs
```

