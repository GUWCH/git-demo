module.exports = {
    //__dirname为双下划线，nodejs的全局变量，指向当前脚本所在目录
    devtool: 'eval-source-map',
    entry: __dirname + '/app/main.js', //唯一入口文件
    output: {
        path: __dirname + '/public', //打包后文件存放的目录
        filename: 'bundle.js' //打包后输出的文件名
    },
    devServer: {
        // port: "2000", //设置端口号默认8080
        contentBase: './public', //本地服务器所加载的页面
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }
}