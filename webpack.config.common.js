const path = require('path');
const config = {
    mode: 'development', // production or development
    entry: './client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
        publicPath: process.env.ASSET_PATH || '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                // 対象となるファイルの拡張子(scss)
                test: /\.scss$/,
                // Sassファイルの読み込みとコンパイル
                use: [
                    // CSSファイルを抽出するように MiniCssExtractPlugin のローダーを指定
                    //   {
                    //     loader: MiniCssExtractPlugin.loader,
                    //   },
                    // CSSをバンドルするためのローダー
                    {
                        loader: 'css-loader',
                        options: {
                            //URL の解決を無効に
                            url: false,
                            // ソースマップを有効に
                            sourceMap: true,
                        },
                    },
                    // Sass を CSS へ変換するローダー
                    {
                        loader: 'sass-loader',
                        options: {
                            // dart-sass を優先
                            implementation: require('sass'),
                            sassOptions: {
                                // fibers を使わない場合は以下で false を指定
                                // fiber: require('fibers'),
                                fiber: false,
                            },
                            // ソースマップを有効に
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    // module: { // Loader setting See: https://webpack.js.org/concepts/#loaders
    //     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    // },
    // import 文で.ts ファイルを解決する。
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    target: ['web', 'es5'],
};

module.exports = config;
