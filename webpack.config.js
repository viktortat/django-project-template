var webpackConfig = {
    context: __dirname,
    output: {
        filename: '[name].js',
        library: '[name]'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: []
};

module.exports = webpackConfig;
