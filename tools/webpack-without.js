class Without {
    constructor(patterns) {
        this.patterns = patterns;
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync(
            "MiniCssExtractPluginCleanup",
            (compilation, callback) => {
                Object.keys(compilation.assets)
                    .filter((asset) => {
                        let match = false;
                        let i = this.patterns.length;
                        while (i--) {
                            if (this.patterns[i].test(asset)) {
                                match = true;
                            }
                        }
                        return match;
                    })
                    .forEach((asset) => {
                        delete compilation.assets[asset];
                    });
                callback();
            }
        );
    }
}

module.exports = Without;
