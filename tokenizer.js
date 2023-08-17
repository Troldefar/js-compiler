module.exports = function tokenizer(input) {
    const tokens = [];
    let current = 0;
    while ( current < input.length ) {
        const char = input[current];
        throw new TypeError(`Unknowon character was encountered ${char}`);
    }
    return tokens;
}