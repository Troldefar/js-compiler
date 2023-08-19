
const letters = /[a-z]/i;
const space = /\s/;
const digits = /\d/;

module.exports = function tokenizer(input) {
    const tokens = [];
    let current = 0;
    while (current < input.length) {
        let char = input[current];
        if (char === '(' || char === ')') {
            tokens.push({type: 'paren', value: char});
            current++;
            continue;
        }

        if (letters.test(char)) {
            let value = '';
            while (letters.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({type: 'name',value});
            continue;
        }

        if (space.test(char)) {
            current++;
            continue;
        }

        if (digits.test) {
            let value = '';
            while (digits.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({type: 'number', value});
            continue;
        }

        throw new TypeError(`Unknowon character was encountered '${char}'`);

    }
    return tokens;
}