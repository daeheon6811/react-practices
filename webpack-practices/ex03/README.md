## webpack-practice : ex03
1. 프로젝트 생성

``` bash
$ mkdir ex01
$ cd ex01
$ npm init -y
$ npm i -D webpack webpack-cli express webpack-dev-server
```

3. [webpack.config.js]
```
const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output : {
        path: path.resolve("public") ,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve('public') , 
        host: "0.0.0.0",
        port : 9999,
        inline : true,
        liveReload : true,
        hot : false , 
        compress : true , 
        historyApiFallback : true ,
                
    }

}

```


4.. 빌드하기
```bash
$ npx webpack
```

5. test server 실행
``` bash
$ npx webpack serve --progress
```





