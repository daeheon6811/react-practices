const path = require('path');

module.exports = (env) => {
    const entry =  path.resolve(`src/${env.src}/index.js`)
   return {
   mode: "none",
    entry: entry,
    output : {
        path: path.resolve("public") ,
        filename: 'bundle.js'
    },
    module: { 
        rules:[{
            test: /\.js$/i,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test :  /\.css$/i ,
            use : ['style-loader' , {loader : 'css-loader' , options : {modules : true} }]
         }, {
            test: /\.svg$/i,
            loader: 'file-loader',
            options: {
                outputPath: '/assets/images',
                name: '[name].[ext]'
            }
        }
        
        ]
    },

    devServer: {
        contentBase: path.resolve('public') , 
        watchContentBase:true,
        host: "0.0.0.0",
        port : 9999,
        inline : true,
        liveReload : true,
        hot : false , 
        compress : true , 
        historyApiFallback : true ,
                
    }
}
}
