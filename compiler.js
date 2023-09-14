const tokenizer = require('./tokenizer');
const parser    = require('./parser');
const transformer = require('./transformer');
const generator = require('./generator');

module.exports = function compiler(input) {
    const tokens = tokenizer(input);
    const syntaxTree = parser(tokens);
    const transformed = transformer(syntaxTree);
    const generatedCode = generator(transformed);
    return generatedCode;
}
