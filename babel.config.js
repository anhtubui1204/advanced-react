const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvTest = process.env.NODE_ENV === 'test';
// const isEnvI18n = process.env.NODE_ENV === 'i18n';

module.exports = {
    presets: [
        isEnvTest && [
            // ES features necessary for user's Node version
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        (isEnvProduction || isEnvDevelopment) && [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'usage',
                corejs: '3.16',
                exclude: ['transform-typeof-symbol'],
            },
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
                development: isEnvDevelopment || isEnvTest,
            },
        ]
    ].filter(Boolean),
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                version: '^7.15.0',
                corejs: false,
            },
        ],
        isEnvProduction && [
            require('babel-plugin-transform-react-remove-prop-types').default,
            {
                removeImport: true,
            },
        ],
    ].filter(Boolean),
};