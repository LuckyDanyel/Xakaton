const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");


const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = () =>  {
    const basePlugins = [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:  path.join(__dirname, 'frontend/pages/index.html'),
            filename: 'templates/index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new VueLoaderPlugin(),
    ];
    if(isProd){
        basePlugins.push(
            require('autoprefixer'),
        )
    }

    return basePlugins;
};

module.exports = {
    context: path.resolve(__dirname),
    mode: 'development',
    entry: './frontend/pages/main.js',
    target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
    watch: (isDev) ? true : false,
    output: {
        filename: `js/${filename('js')}` ,
        path: path.resolve(__dirname, './public/build'),
    },
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, './public/build'),
        open: true,
        compress: true,
        hot: true,
        port: 8090,
    },
    devtool: 'source-map',
    module: {
        rules:[
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    postcss: [require('postcss-cssnext')()]
                }
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader',
                    options: {
                        pretty: true
                    }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)$/,
        
                type: 'asset',
                generator:{
                    filename: 'fonts/[name][ext][query]',
                    publicPath: './public/build'
                    
                },   
            },
            {
                test: /\.(svg|gif|png|jpe?g|)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './images/[name][ext][query]',
                    
                }
            },
        ],           
    },
    resolve: {
        extensions: [ '.ts', '.js', '.vue' ],
        alias: {
            '@': path.resolve(__dirname, 'frontend'),
        }
    },
    plugins: plugins(),
};