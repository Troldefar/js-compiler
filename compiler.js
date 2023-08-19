const tokenizer = require('./tokenizer');
const parser    = require('./parser');
//const transformer = require('./transformer');

module.exports = function compiler(input) {
    /**
     * Step 1
     *  - Lexical analysis
     *  - Collect syntax pieces
    */

    const tokens = tokenizer(input);

    /**
     * Step 2
     *  - Syntactic analysis
     *  - Create AST
    */

    const syntaxTree = parser(tokens);

    /**
     * Step 3
     *  - Transformation
    */

    //const jsTree = transformer(syntaxTree);

    /**
     * Step 4
     *  - Code generation
    */

    /**
     * Step 5
     *  - return
    */

    return syntaxTree;
}