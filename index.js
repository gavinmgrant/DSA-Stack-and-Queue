const Stack = require('./stack');

const starTrek = new Stack();

const main = () => {
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    return starTrek;
}

main();

// 2. Useful methods for a stack

const peek = stack => {
    return stack.top.data;
}

const isEmpty = stack => {
    if (!stack.top) {
        return true;
    } else {
        return false;
    }
};

const display = stack => {
    let currNode = stack.top;
    let result = [];

    while (currNode) {
        result.push(currNode.data);
        currNode = currNode.next;
    }

    return result;
};
/*
console.log(peek(starTrek));
const testStack = new Stack();
console.log(isEmpty(testStack));
console.log(display(starTrek));
*/

// 3. Check for palindromes using a stack

const is_palindrome = s => {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // if stack is empty return null
    if (!s) {
        return null;
    }
    
    const forward = new Stack();
    const backward = new Stack();
    // iterate through string and add new forward stack
    for (let i = s.length-1; i >= 0; i--) {
        forward.push(s[i]);
    }
    // iterate through string and add to new backward stack
    for (let i = 0; i < s.length; i++) {
        backward.push(s[i]);
    }

    // check if each letter in both stacks above are equal
    while(!isEmpty(forward)) {
        if(peek(forward) === peek(backward)) {
            forward.pop();
            backward.pop();
        } else {
            return false
        }
    }

    return true;
};

// Expected answers: true, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));