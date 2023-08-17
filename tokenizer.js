const characters = /[a-z0-9]/i;
const space = /\s/;
module.exports = function tokenizer(input) {
    const tokens = [];
    let current = 0;
    while ( current < input.length ) {
        let char = input[current];
        if (char === '(' || char === ')') {
            tokens.push({
              type: 'paren',
              value: char
            });
            current++;
            continue;
        }
        if (characters.test(char)) {
            let value = '';
            while (characters.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'name',
                value
            });
            continue;
        }
        if(space.test(char)) {
            current++;
            continue;
        }
        throw new TypeError(`Unknowon character was encountered '${char}'`);
    }
    return tokens;
}