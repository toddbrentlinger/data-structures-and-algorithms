"use strict";

// ---------- Stack ----------

// ---------- Stack With Linked List ----------

export class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class StackWithLinkedList {
    /**
     * @constructor
     * @param {StackNode} firstNode
     */
    constructor(firstNode = null) {
        this.head = firstNode;
    }

    /** Returns true if stack is empty, else false. */
    isEmpty() {
        return (this.head === null);
    }

    /**
     * Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
     * @param {Object} item
     */
    push(data) {
        const newNode = new StackNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        //console.log(`${data} pushed to stack`);
    }

    /** Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition. */
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            const poppedData = this.head.data;
            this.head = this.head.next;
            //console.log(`${poppedData} popped from stack`);
            return poppedData;
        }
    }

    /** Returns top element of stack. */
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            //console.log(`${this.head.data} on top of stack`);
            return this.head.data;
        }
    }

    /** Print each element of stack (top-to-bottom) to console. */
    print() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            let currNode = this.head;
            while (currNode !== null) {
                console.log(currNode.data);
                currNode = currNode.next;
            }
        }
    }
}

// ---------- Stack With Array ----------

export class StackWithArray {
    /**
     * @constructor
     * @param {Number} size
     */
    constructor(size) {
        this.elementArr = new Array(size);
        this.top = -1; // Index of top element
        this.max = size; // Maximum size of stack
    }

    /** Returns true if stack is empty, else false. */
    isEmpty() {
        return (this.top === -1);
    }

    /**
     * Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
     * @param {Object} item
     */
    push(item) {
        if (this.top === this.max - 1) {
            console.log("Stack Overflow");
            return;
        } else {
            this.elementArr[++this.top] = item;
        }
    }

    /** Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition. */
    pop() {
        if (this.top === -1) {
            console.log("Stack is empty");
            return;
        } else {
            console.log(`${this.elementArr[this.top]} popped from stack`);
            return this.elementArr[this.top--];
        }
    }

    /** Returns top element of stack. */
    peek() {
        if (this.top === -1) {
            console.log("Stack is Empty");
            return;
        } else {
            console.log(`${this.elementArr[this.top]} on top of stack`);
            return this.elementArr[this.top];
        }
    }

    /** Print each element of stack (top-to-bottom) to console. */
    print() {
        if (this.top === -1) {
            console.log("Stack is Empty");
            return;
        } else {
            for (let i = this.top; i >= 0; i--) {
                console.log(this.elementArr[i]);
            }
        }
    }
}

/**
 * Convert infix expression to postfix expression.
 * @param {String} inflixStr
 */
export function infixToPostfix(inflixStr) {
    /**
     * Returns precendence of operator.
     * @param {String} operator
     */
    function opPrecedence(operator) {
        switch (operator) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
            default:
                return -1;
        }
    }

    let postfixStr = "";
    let opStack = new StackWithLinkedList();

    // Scan the inflix expression from left to right
    for (let i = 0; i < inflixStr.length; i++) {
        // Scanned character
        const c = inflixStr[i];

        // If scanned character is an operand, append to postfix string
        if ((c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            !isNaN(c)) {
            postfixStr += c;
        }
        // If scanned character is '(', push it to the operator stack
        else if (c === '(') {
            opStack.push(c);
        }
        /* If scanned character is ')', pop the stack until the corresponding '(' is removed.
         * Append each operator to the postfix string. */
        else if (c === ')') {
            while (!opStack.isEmpty() && opStack.peek() !== '(') {
                postfixStr += opStack.pop();
            }
            // Remove '(' from operator stack
            opStack.pop();
        }
        /* Else scanned character is an operator, push it to the operator stack.
         * However, first remove any operators on the operator stack that 
         * have higher or equal precedence and append them to the postfix string. */
        else {
            while (!opStack.isEmpty() && opPrecedence(opStack.peek()) >= opPrecedence(c)) {
                postfixStr += opStack.pop();
            }
            opStack.push(c);
        }
    }

    // Pop any remaining operators in stack to postfix string
    while (!opStack.isEmpty()) {
        postfixStr += opStack.pop();
    }

    return postfixStr;
}

export function infixToPostfixUnitTest() {
    const tests = [
        {
            'input': "a+b*c+d",
            'outputExpected': "abc*+d+"
        },
        {
            'input': "a+b*c",
            'outputExpected': "abc*+"
        },
        {
            'input': "(a+b)*c",
            'outputExpected': "ab+c*"
        },
        {
            'input': "A+B*C+D",
            'outputExpected': "ABC*+D+"
        },
        {
            'input': "(A+B)*(C+D)",
            'outputExpected': "AB+CD+*"
        },
        {
            'input': "A*B+C*D",
            'outputExpected': "AB*CD*+"
        },
        {
            'input': "A+B+C+D",
            'outputExpected': "AB+C+D+"
        },
        /*
        {
            'input': "a+b*(c^d-e)^(f+g*h)-i",
            'outputExpected': ""
        },
        {
            'input': "",
            'outputExpected': ""
        }*/
    ];

    tests.forEach(test => {
        const output = infixToPostfix(test['input']);
        const success = output === test['outputExpected'];

        console.log(
            "Input", test['input'], '\n',
            "Expected", test['outputExpected'], '\n',
            "Output", output, '\n',
            "Success", success
        );
    });
}

/**
 * 
 * @param {String} postfix
 */
export function evaluatePostfix(postfix) {
    let opStack = new StackWithLinkedList();

    /**
     * 
     * @param {String} operator
     * @param {String|Number} operand1
     * @param {String|Number} operand2
     */
    function evaluateOperator(operator, operand1, operand2) {
        if (typeof operand1 === 'string')
            operand1 = parseInt(operand1, 10);
        if (typeof operand2 === 'string')
            operand2 = parseInt(operand2, 10);

        switch (operator) {
            case '^':
                return operand1 ^ operand2;
            case '*':
                return operand1 * operand2;
            case '/':
                return operand1 / operand2;
            case '+':
                return operand1 + operand2;
            case '-':
                return operand1 - operand2;
            default:
                return;
        }
    }

    for (let i = 0; i < postfix.length; i++) {
        const c = postfix[i];

        // If element is a number, push it into the stack
        if (!isNaN(c)) {
            opStack.push(parseInt(c, 10));
        }
        // If element is an operator, pop operands for the operator from the stack.
        // Evaluate the operator and push the result back to the stack.
        else {
            const operand2 = opStack.pop();
            const operand1 = opStack.pop();
            opStack.push(evaluateOperator(c, operand1, operand2));
        }
    }

    // When the expression is ended, the number in the stack is the final answer.
    return opStack.peek();
}