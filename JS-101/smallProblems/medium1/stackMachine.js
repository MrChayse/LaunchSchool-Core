/*
stack = last in last out
stack.pop() = current value (the register).
the operation will re-assign the value of the current value (the register)
*/

const miniLang = (operations) => {
  const stack = [];
  let register = 0;
 
  operations.split(" ").forEach(el => {
    let curr;
    switch (el) {
      case "PUSH":
        stack.push(register);
        break;
      case "ADD":
        register += stack.pop();
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "REMAINDER":
        register = Math.floor(register % stack.pop());
        break;
      case "PRINT":
        console.log(register);
        break;
      case "POP":
        curr = stack.pop();
        if (curr !== undefined) {
          register = curr;
        } else {
          console.error("Error: Attempted to pop an empty stack.");
          return;
        }
        break;
      default:
        register = Number(el);
    }
  });
  return register;
};

console.log(miniLang('5 PUSH POP PRINT')); // Output: 5
console.log(miniLang('5 PUSH 3 MULT PRINT'));
