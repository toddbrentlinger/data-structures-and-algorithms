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
        console.log(`${data} pushed to stack`);
    }

    /** Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition. */
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            const poppedData = this.head.data;
            this.head = this.head.next;
            console.log(`${poppedData} popped from stack`);
            return poppedData;
        }
    }

    /** Returns top element of stack. */
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        } else {
            console.log(`${this.head.data} on top of stack`);
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
    function operatorPrecedence(operator) {
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
            (c >= 'A' && c <= 'Z')) {
            postfixStr += c;
        }
        // If scanned character is '(', push it to the operator stack
        else if (c === '(') {
            opStack.push(c);
        }
        /* If scanned character is ')', pop the stack until the corresponding '(' is removed.
         * Append each operator to the postfix string. */
        else if (c === ')') {
            while (opStack.peek() !== '(') {
                postfixStr += opStack.pop();
            }
            // Remove '(' from operator stack
            opStack.pop();
        }
        /* Else scanned character is an operator, push it to the operator stack.
         * However, first remove any operators on the operator stack that 
         * have higher or equal precedence and append them to the postfix string. */
        else {

        }
    }
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
            'input': "(a + b) * c",
            'outputExpected': "ab+c*"
        },
        {
            'input': "A + B * C + D",
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
        {
            'input': "a+b*(c^d-e)^(f+g*h)-i",
            'outputExpected':
        },
        {
            'input': "",
            'outputExpected': ""
        },
    ];
}