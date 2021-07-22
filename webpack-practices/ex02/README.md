## webpack-practice : ex02
1. 프로젝트 생성

``` bash
$ mkdir ex02
$ cd ex02
$ npm init -y
$ npm i -D webpack webpack-cli express
```

3. [webpack.config.js]
```
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output : {
        path: path.resolve("public") ,
        filename: 'bundle.js'
    }

}

```


4.. 빌드하기
```bash
$ npx webpack
```
webpack.config.js 의 output 섹션에 정의된 ./public/bundle.js 로 번들링 됨





