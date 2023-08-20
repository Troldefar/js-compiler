
module.exports = function parser(tokens) {
    let current = 0;
    console.log("ALL TOKENS: ", tokens);
    function walk() {
        let token = tokens[current];
        console.log("Current: ", token);
        if (token.type === 'number') {
            current++;
            return {type: 'NumberLiteral', value: token.value};
        }
        if (token.type === 'paren' && token.value === '(') {
            token = tokens[++current];
            const expression = {type: 'CallExpression', name: token.value, params: []};
            token = tokens[++current];
            while (token.value !== ')') {
                console.log("Finding arguments: ", token.value);
                expression.params.push(walk());
                token = tokens[current];
            }
            current++;
            return expression;
        }
    }

    const tree = {type: 'Program', body: [walk()]};
    return tree;
}