const CompressionWebpackPlugin = require('compression-webpack-plugin'),
    productionGzipExtensions = ['js', 'css'],
    isProduction = process.env.NODE_ENV === 'production',
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    lintOnSave: false,
    publicPath: './',
    assetsDir: "static",
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://www.niuniu.com',
    //             changeOrigin: true,
    //             // ws: true,
    //         }
    //     }
    // },
    productionSourceMap: false,
    chainWebpack: config => {
        // config
        //     .plugin('webpack-bundle-analyzer')
        //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        if (isProduction) {
            // 官方说明： <link rel="prefetch"> 是一种 resource hint，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容 此处关闭预加载
            // config.plugins.delete('preload');
            // config.plugins.delete('prefetch');
            //压缩代码
            config.optimization.minimize(true);
            // 分割代码
            config.optimization.splitChunks({
                chunks: 'all'
            })
        }
    },
    configureWebpack: config => {
        if (isProduction) {
            config.plugins.push(
                new CompressionWebpackPlugin({
                    asset: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                }),
            );
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        // warnings: true,// (默认 false) — 传true来现实压缩器的警告
                        compress: {
                            conditionals: true,//优化if等判断以及条件选择
                            drop_console: true,//移出console
                            dead_code: true,//移除没被引用的代码
                            unused: true,//干掉没有被引用的函数和变量。（除非设置"keep_assign"，否则变量的简单直接赋值也不算被引用。）
                            toplevel: true,//干掉顶层作用域中没有被引用的函数 ("funcs")和/或变量("vars") (默认是false , true 的话即函数变量都干掉)
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            );
            config.externals = {
                // 'vue': 'Vue', // 左侧vue是我们自己引入时候要用的，右侧是开发依赖库的主人定义的不能修改
                // 'vue-router': 'VueRouter',
                // 'vuex': 'Vuex',
                // 'axios': 'axios',
            };
        }
    },
};
