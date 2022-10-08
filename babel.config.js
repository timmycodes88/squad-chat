module.exports = {
    plugins: [
        "module-resolver",
        {
            root: ['./src'],
            extensions: ['.js', '.jsx', '.json', '.svg'],
            alias: {
                hooks: "./src/hooks",
                context: "./src/context"
            }
        }
    ]
}
