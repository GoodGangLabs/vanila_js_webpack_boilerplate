const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.glb$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]' // This will keep the directory structure
                        }
                    }
                ]
            },
            {
                test: /\.bvh$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/'
                        }
                    }
                ]
            },
            {
                test: /\.hdr$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]' // This will keep the directory structure
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }), 
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets' },
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // The directory for static files
        },
        // Include other devServer options as needed
        open: true, // This option opens the browser after the server has been started
        hot: true, // Enable webpack's Hot Module Replacement feature
        port: 3000, // Set the port to run the dev server
        // ... other options ...
    }
};
