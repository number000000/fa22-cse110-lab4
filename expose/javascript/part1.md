1. values added: 20
2. final result: 20
3. values added: 20
4. ReferenceError: result is not defined -> since varible declared using let in an if statement only has block scope, once we return from if statement, the varible is no longer accessible. Line 13 is outside of the if statement, so it doesn't recognize the varible and thus returns an error message.
5. TypeError: Assignment to constant variable. -> The varible declared by const keyword cannot be reassigned later, so when we do result=num1 + num2, it prints an error.
6. ReferenceError: result is not defined -> varible defined by const also has a block scope, so line 13 couldn't recognize the varibale.