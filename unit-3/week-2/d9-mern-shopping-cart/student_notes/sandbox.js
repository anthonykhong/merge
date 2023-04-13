// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   push(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }

//   pop() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// const queue = [];
// queue.unshift("First");
// queue.unshift("Second");
// queue.unshift("Third");
// queue.pop();
// queue.pop();
// queue.pop();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   dequeue() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }

//   enqueue(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }
// }

/*
Write a function, befittingBrackets, that takes in a string as an argument.
The function should return a boolean indicating whether or not the string
contains correctly matched brackets.
You may assume the string contains only characters: ( ) [ ] { }
*/

const befittingBrackets = (str) => {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of str) {
    if (char in pairs) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (last === undefined || pairs[last] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(befittingBrackets("(){}[](())")); // -> true
console.log(befittingBrackets("({[]})")); // -> true
console.log(befittingBrackets("[][}")); // -> false
console.log(befittingBrackets("{[]}({}")); // -> false
console.log(befittingBrackets("[]{}(}[]")); // -> false
console.log(befittingBrackets("[]{}()[]")); // -> true
console.log(befittingBrackets("]{}")); // -> false
console.log(befittingBrackets("")); // -> true
console.log(befittingBrackets("{[(}])")); // -> false
