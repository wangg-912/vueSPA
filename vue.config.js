const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isPro = process.env.NODE_ENV === 'production'

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 部署生产环境和开发环境下的URL。 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上 例如
    // https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在
    // https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
    baseUrl: process.env.NODE_ENV === "production" ?
        "./" : "/",
    // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
    outputDir: "dist",
    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "assets",
    // 指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名) indexPath:
    // "myIndex.html", 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false
    // 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    filenameHashing: false,
    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint

    lintOnSave: true,
    // 如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置 lintOnSave: process.env.NODE_ENV !==
    // 'production', 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template
    // 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false) runtimeCompiler: false,

    /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
     *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     * */
    productionSourceMap: false,
    chainWebpack: (config) => {
        config
            .resolve
            .alias
            .set('@', resolve('src'))
            .set('@x', resolve('src/axios'))
            .set('@@', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('@w', resolve('src/widgets'))
            .set('@v', resolve('src/views'))
    },
    configureWebpack: config => {
        if (isPro) {
            return {
                plugins: [new CompressionWebpackPlugin({
                    // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询
                    filename: '[path].gz[query]',
                    // 使用 gzip 压缩
                    algorithm: 'gzip',
                    // 处理与此正则相匹配的所有文件
                    test: new RegExp('\\.(js|css)$'),
                    // 只处理大于此大小的文件
                    threshold: 10240,
                    // 最小压缩比达到 0.8 时才会被压缩
                    minRatio: 0.8
                })]
            }
        }
    },

    // 它支持webPack-dev-server的所有选项
    devServer: {
        host: "192.168.2.25",
        port: 8082, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
    }

};