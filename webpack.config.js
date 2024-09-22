const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test:/\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test:/\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                    'sass-loader',
                ]
            },     
        ],
    },
    resolve : {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devServer: {
        contentBase: './build',
        port: 3000,
    },
}