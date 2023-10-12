module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension':
            [1, { extensions: ['.js', '.tsx', '.ts'] }],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'import/no-extraneous-dependencies': 'warn',
        'react/react-in-jsx-scope': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-closing-tag-location': 'off',
        'max-len': ['warn', { ignoreComments: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
