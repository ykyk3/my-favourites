const devConfig = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        // inline: true,
        open: true,
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000',
                secure: false,
                logLevel: 'debug',
            },
        },
    },
};
module.exports = devConfig;
