const traverse = require('./traverse');

module.exports = function transformer(tree) {

    const javascriptTree = {
        type: 'Program',
        body: []
    }

    /**
     * 
     * @var position should start at the root node @type javascriptTree.body
    */

    let position = javascriptTree.body;

    traverse(tree, {
        NumberLiteral(node) {
            position.push({
                type: 'NumericLiteral',
                value: node.value
            });
        },
        CallExpression(node, parent) {
            let expression = {
                type: CallExpression,
                callee: {
                    type: 'Identifier',
                    name: node.name
                },
                arguments: []
            }
            const prevPosition = position;
            position = expression.arguments;
            if (parent.type !== 'CallExpression') {
                expression = {
                    type: 'ExpressionStatement',
                    expression
                };
            }
            prevPosition.push(expression);
        }
    });

    return javascriptTree;

}