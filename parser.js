
module.exports = function parser(tokens) {
    let current = 0;
    console.log("ALL tokeNS: ", tokens);
    console.log("end of ALL tokeNS");
    function walk() {
        let token = tokens[current];
        if (token.type === 'number') {
            current++;
            return {
                type: 'NumberLiteral',
                value: token.value
            };
        }
        if (token.type === 'paren' && token.value === '(') {
            token = tokens[++current];
            const expression = {
                type: 'CallExpression',
                name: token.value,
                params: []
            };

            console.log(token);
            token = tokens[++current];
            console.log(token);
            // Keeo iterating until we hit the end of our CallExpression
            while (token.value !== ')') {
                expression.params.push(walk());
                token = tokens[current];
            }
            current++;
            return expression;
        }

        throw new TypeError(`Unknown token: '${token}'`);
    }

    const tree = {
        type: 'Program',
        body: [walk()]
    };

    return tree;
}