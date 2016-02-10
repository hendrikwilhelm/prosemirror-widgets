module.exports = {
    entry: __dirname + '/src/widgets/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        library: 'libraryname',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015-loose', 'stage-1']
                }
            }
        ]
    }
}
