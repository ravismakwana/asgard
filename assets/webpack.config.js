const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const JS_DIR = path.resolve(__dirname, 'src/js');
const IMG_DIR = path.resolve(__dirname, 'src/img');
const LIB_DIR = path.resolve( __dirname, 'src/library' );
const BUILD_DIR = path.resolve(__dirname, 'build');

const entry = {
    main: JS_DIR + '/main.js',
    single: JS_DIR + '/single.js',
};
const output = {
    path: BUILD_DIR,
    filename: 'js/[name].js'
};

const rules = [
    {
        test: /\.js$/,
        include: [JS_DIR],
        exclude: /node_modules/,
        use: 'babel-loader'
    },
    {
        test: /\.s?[c]ss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ],
    },
    {
        test: /\.sass$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'sass-loader',
                options: {
                    sassOptions: { indentedSyntax: true }
                }
            }
        ]
    },
    {
        test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: 'production' === process.env.NODE_ENV ? '../' : '../../'
                },
            },
        ],
    },
    {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: [ IMG_DIR, /node_modules/ ],
        generator: {
            filename: '[path][name].[ext]',
        },
        use: {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
                publicPath: 'production' === process.env.NODE_ENV ? '../' : '../../'
            }
        }
    }

];

const plugins = ( argv ) => [
    new CleanWebpackPlugin( {
        cleanStaleWebpackAssets: ('production'  === argv.mode)
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),
    new CssMinimizerPlugin(),

];
module.exports = ( env , argv ) => ({
    entry : entry,
    output: output,
    devtool: 'source-map',
    module: {
        rules: rules,
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({
                minify: [
                    CssMinimizerPlugin.cssnanoMinify,
                    CssMinimizerPlugin.cleanCssMinify
                ]
            }),
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify,
                parallel: true,
            }),
        ],
    },
    plugins: plugins( argv ),
    externals: {
        jquery: 'jQuery',
    },
});