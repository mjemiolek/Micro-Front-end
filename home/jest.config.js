module.exports = {
    verbose: true,
    testEnvironment: 'jsdom',
    setupFiles: ['./src/__mocks__/cart/cart.js'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom'
}