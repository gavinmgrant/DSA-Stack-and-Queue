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
    if (!stack.top) {
        return false;
    }
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
    while (!isEmpty(forward)) {
        if (peek(forward) === peek(backward)) {
            forward.pop();
            backward.pop();
        } else {
            return false
        }
    }

    return true;
};

// Expected answers: true, true, true, false
/*
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
*/

// 4. Matching parentheses in an expression

const parenthesesMatch = exp => {
    const stack = new Stack();

    for (let i = 0; i < exp.length; i++) {
        // check string expression for opening brackets and add to the stack
        if (exp[i] === '(') {
            stack.push(exp[i]);
        }
        // if the string character is ')' and the stack is empty that means there are no opening brackets
        if (exp[i] === ')') {
            if (isEmpty(stack)) {
                console.log('you are missing a "("');
                return false;
            }
            // remove one opening bracket since we found a closing bracket
            stack.pop();
        }
    }
    // if there are any remaining opening brackets in the stack, that means they don't have a matching closing bracket
    if (!isEmpty(stack)) {
        console.log('you are missing a ")"');
        return false;
    }

    return true;
}

// console.log(parenthesesMatch('((((((((())'));

// 5. Sort stack

const toSort = new Stack();
const makeSort = () => {
    toSort.push(8);
    toSort.push(6);
    toSort.push(10);
    toSort.push(2);
    toSort.push(3);

    return toSort;
}

makeSort();
console.log(display(toSort));

const sortStack = stack => {
    const sortedStack = new Stack();
    // iterate through the input stack...
    while (!isEmpty(stack)) {
        // get the top node value of the input stack
        let temp = stack.pop();
        // go through numbers lower than the current high value in the new, sorted stack
        while (temp < peek(sortedStack)) {
            // move values to input stack
            stack.push(sortedStack.pop());
        }
        // insert the top value of the stack into the new, sorted stack
        sortedStack.push(temp);
    }
    return sortedStack;
};

const sorted = sortStack(toSort);
console.log(display(sorted));