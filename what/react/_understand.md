> 通过webpack-dev-server前台搭建的服务，编译出的文件存在与内存中

####webpack-dev-server  其他配置选项
- --quite 控制台中不输出打包的信息
- --compress 开启gzip压缩
- --progress 显示打包的进度
- --inline 选择inline-mode模式，是webpack-dev-server会在你的 webpack.config.js 的入口配置文件中再添加一个入口
- --hot Hot Module Replacement 开启热替换
- --content-base 设定webpack-dev-server 伺候的文件夹目录。如果不进行设定的话，默认是在当前目录下。
- --port 服务启动的端口

####资源复制
> 如果通过webpack-dev-server启动的服务，资源复制出的文件也存在于内存中，通过webpack的插件 transfer-webpack-plugin 来实现资源复制 。如果通过webpack编译，那么复制的文件将存放于自定义的文件夹中。