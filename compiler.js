const tokenizer = require('./tokenizer');

module.exports = function compiler(input) {
    /**
     * Step 1
     *  - Lexical analysis
    */

    const tokens = tokenizer(input);

    /**
     * Step 2
     *  - Syntactic analysis
    */

    /**
     * Step 3
     *  - Transformation
    */

    /**
     * Step 4
     *  - Code generation
    */

    /**
     * Step 5
     *  - return
    */

    return tokens;
}