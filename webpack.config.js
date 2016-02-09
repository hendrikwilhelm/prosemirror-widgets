module.exports = {
    entry: './src/widgets/index.js',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015-loose', 'stage-1']
                }
            }
        ]
    }
}
