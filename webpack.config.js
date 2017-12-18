const webpack =require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // __dirname是node.js中指向当前执行脚本的所在目录
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js', // 唯一入口文件
    output: {
        path: __dirname + '/build', // 打包文件存放目录
        filename: 'bundle.js' // 打包后文件名称
    },

    devServer: {
        port: 2000,
        contentBase: './public', //本地服务器加载所在页面
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true 
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true, // 指定启用css module
                            locaIndetName: '[name]__[local]__[hash:base64:5]' //指定css的类名格式
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('Author:WIND'),
        new HtmlWebpackPlugin({
            template : __dirname + "/app/index.tmpl.html"// new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin() // 热加载插件
    ]
}