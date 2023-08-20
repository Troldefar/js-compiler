const tokenizer = require('./tokenizer');
const parser    = require('./parser');
const transformer = require('./transformer');
const generator = require('./generator');

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

    const transformed = transformer(syntaxTree);

    /**
     * Step 4
     *  - Code generation
    */

    const generatedCode = generator(transformed);

    /**
     * Step 5
     *  - return
    */

    return generatedCode;
}