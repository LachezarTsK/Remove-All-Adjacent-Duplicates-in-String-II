
/**
 * @param {string} input
 * @param {number} numberOfConsecutiveDuplicates
 * @return {string}
 */
var removeDuplicates = function (input, numberOfConsecutiveDuplicates) {

    const stack = [];
    for (let i = 0; i < input.length; ++i) {

        let current = input.charAt(i);
        if (stack.length === 0 || stack[stack.length - 1].letter !== current) {
            stack.push(new Pair(current, 1));
            continue;
        }
        if (++stack[stack.length - 1].frequency === numberOfConsecutiveDuplicates) {
            stack.pop();
        }
    }

    return convertStackToString(stack);
};

/**
 * @param {Pair[]} stack
 * @return {string}
 */
function convertStackToString(stack) {
    const result = [];
    let index = 0;
    while (index < stack.length) {
        while (stack[index].frequency-- > 0) {
            result.push(stack[index].letter);
        }
        ++index;
    }
    return result.join('');
}

/**
 * @param {string} letter
 * @param {number} frequency
 */
function  Pair(letter, frequency) {
    this.letter = letter;
    this.frequency = frequency;
}
