class diy {
    apply(compiler) {
        compiler.hooks.beforeRun.tap('before', () => {
            console.log('before run...')
        })
        compiler.hooks.run.tap('run', () => {
            console.log('run...')
        })
        compiler.hooks.compile.tap('com', (c) => {
            console.log(c, 'com...')
        })
        compiler.hooks.done.tap('done', (c) => {
            console.log('done...')
        })
    }
}

module.exports = diy