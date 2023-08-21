module.exports = function generator(node) {
    
    if (node.type === 'NumericLiteral') return node.value;
    if (node.type === 'Identifier') return node.name;
    if (node.type === 'CallExpression') return `${generator(node.callee)}(${node.arguments.map(generator).join(', ')})`;
    if (node.type === 'ExpressionStatement') return `${generator(node.expression)};`;
    if (node.type === 'Program') return node.body.map(generator).join('\n');
  }