/**
 * Created by Administrator on 2017/1/1 0001.
 */
var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        extensions: ['', '.js', '.vue', '.jsx'], //后缀名自动补全
        alias : {
            vue : "vue/dist/vue.js",
            store : path.resolve('src/store/'),
            router : path.resolve('src/router/'),
            components : path.resolve('src/components/'),
            pages : path.resolve('src/pages/'),
            ajax : path.resolve('src/ajax/')
        }
    },
    module : {
        loaders : [{
            test : /\.js$/,
            loader : 'babel-loader',
            exclude : /node_module/
        },{
            test : /\.vue$/,
            loader : 'vue-loader'
        },{
            test : /\.scss$/,
            loader : 'style-loader!css-loader!sass-loader'
        },{
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader'
        },{
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader'
        }]
    },
    vue : {
        loaders : {
            js : 'babel',
            scss : 'style-loader!css-loader!sass-loader'
        }
    },
    devServer : {
        historyApiFallback : true,
        host : false,
        inline : true,
        grogress : true
    }
}