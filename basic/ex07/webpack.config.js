const path = require('path');

module.exports = {
    
   
    entry: path.resolve('src/index.js'),
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
            test :  /\.(sa|sc|c)ss$/i ,
            use : ['style-loader', 'css-loader' , 'sass-loader',       ]
         },{
            test :  /\.(png|gif|jpg?g|svg|ico|tiff|bmp)$/i ,
            type: 'asset/resource'
         },
        
        
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

