const Webpack = require('webpack');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const OpenBrowserWebpackPlugin = require("open-browser-webpack-plugin");
const path = require("path");
module.exports = {
    context: __dirname,
    entry: "./entry.js",  //入口文件 单个文件 输出为单个文件
    // entry: ['./app.js','./main.js'],  //多个文件entry后面跟数组 输出为单个文件
    // entry: {     //多个文件
    //     a: './main.js',
    //     b: './app.js'
    // },
    output: {   //输出文件属性
        path: __dirname + "/dist",  //输出文件路径
        filename: "bundle.js"   //当为1，2种情况时 filename的配置
        // filename: "[name].js"  当为第3中情况时 filename的配置
    },
    module: {
        // 预编译器-eslint代码检查
        preLoaders: [{// eslint
            test: /(\.js$|\.jsx$)/,
            exclude: /(node_modules)/,
            loader: 'eslint-loader'
        },
        ],
      rules: [

      ],
        loaders: [
            //babel 把es6语法转换为es5在当前环境执行
            {
                loader: 'babel',
                test: /(\.js$|\.jsx$)/,
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                },
                plugins:[

                  ['import',[{libraryName:'antd',style:true}]]//import less
                ]

            },
          {
            test: /\.css$/,
            loaders: [ 'style-loader', 'css-loader' ]
          }
        ]
    },
    plugins: [
        //静态html页面文件复制到指定的目录
        new CopyWebpackPlugin([
            {
                from: './static',
                to: "./html"
            },
            {
                from: './res',
                to: './res'
            }
//            {
//                from: './res/images',
//                to: './res/images'
//            },
//            {
//                from: './res/fonts',
//                to: './res/fonts'
//            },
//            {
//                from: './res/js',
//                to: './res/js'
//            }
        ]),
        //js、css、iconfont、images复制到制定目录  未完成
        // new TransferWebpackPlugin([{
        //     from: '../../res/css'
        // }], 'dist/res/css'),
        //自动注入库定义
        new Webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
        //自动打开浏览器
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8080/static/index.html'
        }),
        //压缩打包文件
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //合并公共代码   合并入口文件的公共部分
        new Webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: "./common.js",
            chunks: ['app']
        })
    ],
    //用于程序自动补全识被import引用的文件后缀 
    resolve: {
        extensions: ['', '.jsx', '.js']
    },
    // 使用的eslint配置文件
    eslint: {
        configFile: '.eslintrc'
    },


};