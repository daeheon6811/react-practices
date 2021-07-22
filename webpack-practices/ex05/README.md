## webpack-practice : ex03
1. 프로젝트 생성

``` bash
$ mkdir ex04
$ cd ex04
$ npm init -y
$ npm i -D webpack webpack-cli express webpack-dev-server
$ npm i -D style-loader css-loader
```

3. [webpack.config.js]
```
module.exports = {
    entry: path.resolve('src/index.js'),
    output : {
        path: path.resolve("public") ,
        filename: 'bundle.js'
    },
    module : {
        rules : [{
           test :  /\.css$/i ,
           use : ['style-loader' , 'css-loader']
        },{
            test : /\.s[ac]css/i,
            use : [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]

        }]
        

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





