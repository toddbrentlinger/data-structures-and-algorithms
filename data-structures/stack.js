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
     * @param {any} item
     */
    push(item) {
        const newNode = new StackNode(item);

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

    /**
     * Recursive function that inserts an element at bottom of the stack.
     * @param {any} item
     */
    insertAtBottom(item) {
        if (this.isEmpty()) {
            this.push(item);
        } else {
            /* All items are held in Function Call Stack until we reach end
             * of the stack. When the stack becomes empty, the above if part is
             * executed and the item is inserted at the bottom. */
            const topItem = this.pop();
            this.insertAtBottom(item);

            /* Push all the items held in Function Call Stack once the item
             * is inserted at the bottom. */
            this.push(topItem);
        }
    }

    /** Reverse the linked list instance using recursive insertAtBottom() */
    reverse() {
        if (!this.isEmpty()) {
            /* Hold all items in Function Call Stack until we reach end of
             * the stack. */
            const topItem = this.pop();
            this.reverse();

            /* Insert all the items held in Function Call Stack one by one
             * from the bottom to top. Every item is inserted at the bottom. */
            this.insertAtBottom(topItem);
        }
    }

    /**
     * Sorts stack with values in ascending/descending order.
     * @param {Boolean} toAscending
     */
    sort(toAscending = true) {
        if (!this.isEmpty()) {
            const temp = this.pop(); // Pop top item
            this.sort(toAscending); // Sort remaining stack

            // Push the top item back to sorted stack
            if (toAscending)
                StackWithLinkedList.sortedInsert(this, temp);
            else
                StackWithLinkedList.sortedInsertDescending(this, temp);
        }
    }

    /**
     * Insert element into stack in ascending sorted way.
     * @param {StackWithLinkedList} stack
     * @param {any} element
     */
    static sortedInsert(stack, element) {
        if (stack.isEmpty() || element > stack.peek()) {
            stack.push(element);
        }
        /* Else top of stack is greater than element, pop the top item
         * and recursively call sortedInsert. */
        else {
            const temp = stack.pop();
            StackWithLinkedList.sortedInsert(stack, element);

            // Push back the top item removed earlier
            stack.push(temp);
        }
    }

    /**
     * Insert element into stack in descending sorted way.
     * @param {StackWithLinkedList} stack
     * @param {any} element
     */
    static sortedInsertDescending(stack, element) {
        if (stack.isEmpty() || element < stack.peek()) {
            stack.push(element);
        }
        /* Else top of stack is lesser than element, pop the top item
         * and recursively call sortedInsertDescending. */
        else {
            const temp = stack.pop();
            StackWithLinkedList.sortedInsertDescending(stack, element);

            // Push back the top item removed earlier
            stack.push(temp);
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
     * @param {any} item
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
            //console.log(`${this.elementArr[this.top]} popped from stack`);
            return this.elementArr[this.top--];
        }
    }

    /** Returns top element of stack. */
    peek() {
        if (this.top === -1) {
            console.log("Stack is Empty");
            return;
        } else {
            //console.log(`${this.elementArr[this.top]} on top of stack`);
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

    /**
     * Recursive function that inserts an element at bottom of the stack.
     * @param {any} item
     */
    insertAtBottom(item) {
        if (this.isEmpty()) {
            this.push(item);
        } else {
            /* All items are held in Function Call Stack until we reach end
             * of the stack. When the stack becomes empty, the above if part is
             * executed and the item is inserted at the bottom. */
            const topItem = this.pop();
            this.insertAtBottom(item);

            /* Push all the items held in Function Call Stack once the item
             * is inserted at the bottom. */
            this.push(topItem);
        }
    }

    /** Reverse the linked list instance using recursive insertAtBottom() */
    reverse() {
        if (!this.isEmpty()) {
            /* Hold all items in Function Call Stack until we reach end of
             * the stack. */
            const topItem = this.pop();
            this.reverse();

            /* Insert all the items held in Function Call Stack one by one
             * from the bottom to top. Every item is inserted at the bottom. */
            this.insertAtBottom(topItem);
        }
    }

    /**
     * Sorts stack with values in ascending/descending order.
     * @param {Boolean} toAscending
     */
    sort(toAscending = true) {
        if (!this.isEmpty()) {
            const temp = this.pop(); // Pop top item
            this.sort(toAscending); // Sort remaining stack

            // Push the top item back to sorted stack
            if (toAscending)
                StackWithLinkedList.sortedInsert(this, temp);
            else
                StackWithLinkedList.sortedInsertDescending(this, temp);
        }
    }

    /**
     * Insert element into stack in ascending sorted way.
     * @param {StackWithLinkedList} stack
     * @param {any} element
     */
    static sortedInsert(stack, element) {
        if (stack.isEmpty() || element > stack.peek()) {
            stack.push(element);
        }
        /* Else top of stack is greater than element, pop the top item
         * and recursively call sortedInsert. */
        else {
            const temp = stack.pop();
            StackWithLinkedList.sortedInsert(stack, element);

            // Push back the top item removed earlier
            stack.push(temp);
        }
    }

    /**
     * Insert element into stack in descending sorted way.
     * @param {StackWithLinkedList} stack
     * @param {any} element
     */
    static sortedInsertDescending(stack, element) {
        if (stack.isEmpty() || element < stack.peek()) {
            stack.push(element);
        }
        /* Else top of stack is lesser than element, pop the top item
         * and recursively call sortedInsertDescending. */
        else {
            const temp = stack.pop();
            StackWithLinkedList.sortedInsertDescending(stack, element);

            // Push back the top item removed earlier
            stack.push(temp);
        }
    }
}

// ---------- Functions That Use Stack With Linked List ----------

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
 * Evaluate postfix expression.
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
        let c = postfix[i];

        if (c === " ")
            continue;

        // If element is a number, push it into the stack
        else if (!isNaN(c)) {
            let n = 0;

            while (c !== " " && !isNaN(c)) {
                n = n * 10 + parseInt(c, 10);
                c = postfix[++i];
            }
            i--;

            opStack.push(n);
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

/**
 * Tests whether brackets in expression are balanced.
 * @param {String} bracketStr
 */
export function areBracketsBalanced(bracketStr) {
    let charStack = new StackWithLinkedList();

    for (let i = 0; i < bracketStr.length; i++) {
        const c = bracketStr[i];

        if (c === "(" || c === "{" || c === "[") {
            charStack.push(c);
        } else if (c === ")") {
            if (charStack.pop() !== "(")
                return false;
        } else if (c === "}") {
            if (charStack.pop() !== "{")
                return false;
        } else if (c === "]") {
            if (charStack.pop() !== "[")
                return false;
        }
    }
    return charStack.isEmpty();
}


/**
 * Prints the element and Next Greater Element (NGE) pair for all elements of array.
 * @param {Number[]} arr
 * @param {Number} size
 */
export function printNGE(arr, size = arr.length) {
    let indexStack = new StackWithLinkedList(); // Stack to store indices
    const ngeArr = new Array(size).fill(-1); // Array of next greater elements initialized to -1

    indexStack.push(0); // Push the first element index to stack

    for (let i = 1; i < size; i++) {
        const next = arr[i];

        while (!indexStack.isEmpty() && next > arr[indexStack.peek()]) {
            ngeArr[indexStack.pop()] = arr[i];
        }

        indexStack.push(i);
    }

    // Print each element and NGE pair
    for (let i = 0; i < size; i++) {
        console.log(`${arr[i]} --> ${ngeArr[i]}`);
    }
}

// ---------- Functions That Use Stack With Array ----------

/**
 * Reverse string using stack data structure.
 * @param {String} str
 */
export function reverseString(str) {
    const strLength = str.length;
    let charStack = new StackWithArray(strLength);
    let reversedStr = "";

    // Add characters of string to stack
    for (let i = 0; i < strLength; i++)
        charStack.push(str[i]);

    // Pop characters from stack to reversed string
    while (!charStack.isEmpty())
        reversedStr += charStack.pop();

    return reversedStr;
}

// ---------- Two Stacks With Array ----------

/** Implement two stacks in an array. */
export class TwoStacksInArray {
    /**
     * @constructor
     * @param {Number} size
     */
    constructor(size) {
        this.elementArr = new Array(size);
        this.max = size; // Maximum size of stack
        this.top1 = -1; // Index of first stack in front of array
        this.top2 = size; // Index of second stack in back of array
    }

    push1(data) {
        if (this.top1 < this.top2 - 1) {
            this.elementArr[++this.top1] = data;
        } else {
            console.log("Stack Overflow");
        }
    }

    push2(data) {
        if (this.top1 < this.top2 - 1) {
            this.elementArr[--this.top2] = data;
        } else {
            console.log("Stack Overflow");
        }
    }

    pop1() {
        if (this.top1 >= 0) {
            return this.elementArr[this.top1--];
        } else {
            console.log("Stack is Empty");
        }
    }

    pop2() {
        if (this.top2 < this.max) {
            return this.elementArr[this.top2++];
        } else {
            console.log("Stack is Empty");
        }
    }
}