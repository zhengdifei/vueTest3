/**
 * Created by Administrator on 2017/1/1 0001.
 */
var webpack = require('webpack')
var path = require('path')

module .exports ={
    entry : [
        path.join(__dirname,'src','main')
    ],
    output : {
        path : path.join(__dirname,'./dist'),
        filename : 'build.js',
        publicPath : '/dist/'
    },
    resolve : {
        alias : {
            vue : "vue/dist/vue.js"
        }
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader : 'babel',
            exclude : /node_module/
        },{
            test : /\.vue$/,
            loader : 'vue'
        }]
    },
    vue : {
        loaders : {
            js : 'babel'
        }
    },
    devServer : {
        historyApiFallback : true,
        host : false,
        inline : true,
        grogress : true
    }
}