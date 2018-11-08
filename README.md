# vue-webpack-2

> 第二次测试多页面加载

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


关于此项目一些说明：
1，pages文件夹存放页面文件
2，components文件夹存放公共组件
3，common文件夹存放公共的js,css以及图片文件
4，多页面配置项包括：build/webpack.base.conf.js,build/webpack.dev.conf.js,build/webpack.pro.conf.js
build/webpack.base.conf.js配置项：
(1)
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
        '@': resolve('src'),
        'common': resolve('src/common'),
        'pages': resolve('src/pages'),
        'components': resolve('src/compoments')
        }
    },
    //此项配置，主要设置相关文件路径
(2)
    entry: {
        app: './src/main.js',
        home: './src/common/js/home.js'
    },
    //此项配置，各个页面引用的js,与webpack.dev.conf.js，webpack.pro.conf.js文件的页面设置配合使用
    如：
    new HtmlWebpackPlugin({
      filename: config.build.home,
      template: 'src/pages/home/index.html',
      inject: true,
      chunks:['manifest','vendor','home'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),

    注意：chunks中的manifest和vendor项，在vue-cli中多页面设置不改变webpack的其他配置的话，此两项必须填入chunks中，不填的话，build后，页面报错：webpackJsonp is not defined，参考文章填坑：https://segmentfault.com/q/1010000011270788

4，其他设置，如build后static中会生成文件名带有has值的文件，如果觉得别扭可以在webpack.base.conf.js文件中对rules的命名规则进行修改;webpack.pro.conf.js中的js,css文件命名进行修改调整

5,http文件夹为axios的封装
调用方法：
    js引入
    import api from './http/index'
    Vue.use(api)
    vue中使用
    例子
    this.$api.query().then(res => {
        if (res.rc === 0) {
            this.pageList = res.data.item
        } else {
            this.$Message.info(res.desc);
        }
    }).catch(error => {
        this.$Message.info(error);
    })
主要修改入口interface.js,添加需要的方法
