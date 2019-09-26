const presets = [
    ['@babel/preset-env', {
        targets: {
            node: 'current'
        },
        // loose: true,
        // modules: false
    }],
    ['@babel/preset-react']
];
const plugins = [
    '@babel/plugin-syntax-object-rest-spread',
    // '@babel/plugin-transform-modules-commonjs'
    // '@babel/plugin-syntax-dynamic-import',
    // 'react-loadable/babel'
];

module.exports = (api) => {
    api.cache(true);

    return {
        babelrcRoots: [
            '.',
            'packages/*'
        ],
        presets,
        plugins,
        env: {
            test: {
                plugins: [
                    // "transform-es2015-modules-commonjs"
                ]
            }
        }
    };
};
