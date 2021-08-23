const paths = require("../config/path");

module.exports = (options) => {
    const getStyleLoaders = (preProcessor) => {
        const loaders = options.styleRuleOption.concat([
            {
                loader: require.resolve('css-loader'),
                options: {
                    sourceMap: options.hasStyleSourceMap,
                },
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    postcssOptions: {
                        ident: 'postcss',
                        plugins: [
                            require('postcss-flexbugs-fixes'),
                            require('postcss-preset-env')({
                                stage: 3,
                            }),
                            require('postcss-normalize'),
                        ],
                    },
                    sourceMap: options.hasStyleSourceMap,
                },
            },
        ]);

        if (preProcessor) {
            loaders.push(
                {
                    loader: require.resolve('resolve-url-loader'),
                    options: {
                        sourceMap: options.hasStyleSourceMap,
                        root: paths.src,
                    },
                },
                {
                    loader: require.resolve('sass-loader'),
                    options: {
                        sourceMap: true,
                    },
                },
            );
        }

        return loaders;
    };

    const webpackOptions = {
        mode: options.mode,
        entry: options.entry,
        // defaults to ./src
        // Here the application starts executing
        // and webpack starts bundling
        output: Object.assign(
            {
                path: paths.build,
            },
            options.output
        ), // options related to how webpack emits results
        optimization: options.optimization,
        module: {
            // configuration regarding modules
            rules: [
                // rules for modules (configure loaders, parser options, etc.)
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: require.resolve('babel-loader'),
                        options: options.babelRuleOption,
                    },
                },
                {
                    test: /\.css$/,
                    use: getStyleLoaders(),
                    sideEffects: true,
                },
                {
                    test: /\.(scss|sass)$/,
                    use: getStyleLoaders('sass-loader'),
                    sideEffects: true,
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: '@svgr/webpack',
                            options: {
                                prettier: false,
                                svgo: true,
                                svgoConfig: {
                                    plugins: [{ removeViewBox: false }],
                                },
                                titleProp: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 10 * 1024,
                        },
                    },
                },
                { test: /\.(woff(2)?|eot|ttf|otf|)$/, type: 'asset/inline' },
            ],
        },
        plugins: options.plugins,
        resolve: {
            modules: ['node_modules', paths.src],
            extensions: ['.js', '.jsx', '.json'],
            mainFields: ['browser', 'main'],
        },
        devtool: options.devtool,
        performance: {
            hints: false,
        },
    };

    if (options.devServer) {
        webpackOptions.devServer = options.devServer;
    }

    return webpackOptions;
};
