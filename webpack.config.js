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
            {
                test: /\.(png|svg|jpg|gif)$/,
                    use: [{
                loader: 'file-loader',
                options: {
                    name: f => {
                        let dirNameInsideAssets = path.relative(path.join(__dirname, 'src'), path.dirname(f));
                        return `${dirNameInsideAssets}/[name].[ext]`;
                    }
                }
            }],
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