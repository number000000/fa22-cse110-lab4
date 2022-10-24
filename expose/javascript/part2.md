1. printed out the value of i, which is 3. i is declared using var, which has a function scope, and initialized to 0 at the start of the for loop. Then it will be imcremented to at most prices.length during the for loop. In this case, it's 3. So after we finish the for loop, i stores 3.
2. printed out the discounted price of the last element, which is 150. discountedPrice is declared using var, which has a function scope, and assigned value every time in the loop based on the operation: prices[i] * (1 - discount), where prices[i] is the value of each element in the input array. Since the for loop loops through the entire input array, once it is finished, discountedPrice will store the discounted price of the last element and will be accessed by line 13 outside the for loop.
3. printed out the discounted price of the last element that is rounded to the nearest integer, which is 150. finalPrice is declared using var, which has a function scope, and assigned value every time in the loop based on the operation Math.round(discountedPrice * 100) / 100. Since the for loop goes through the entire input array, so once it is finished, finalPrice will store the rounded discounted value of the last element and will be accessed by line 14 outside the for loop.
4. [50, 100, 150] -> returns an array of discounted value of the input. discounted has a function scope as it is declared using var. The keyword return signifies that the function will return the varible after it, in this case is discounted.
5. ReferenceError: i is not defined -> return an error message. It is because i is defined using keyword let. It only has a block scope that is restrained inside the for loop. Line 12 is outside the for loop, so failed to reach i. 
6. ReferenceError: discountedPrice is not defined -> return an error. discountedPrice is also defined using let in the for loop, which only has a block scope. So we cannot reach it outside the for loop at Line 13.
7. Printed out the final price of the last element, which is 150. finalPrice is declared at the begining of the function using let, so it has a block scope that spans the entire function. Therefore, we can access it after the for loop without any issue. As previously mentioned, finalPrice stores the rounded discounted price of the last element after for loop ends. So when we print it out, we get 150.
8.  [50, 100, 150] -> returns an array of discounted value of the input. discounted has a block scope that spans the entire function so it can be accessed at the end of the function. The keyword return signifies that the function will return the varible after it, in this case is discounted.
9.  ReferenceError: i is not defined -> return an error. Since i is declared using keyword let within the for loop, it only has a block scope of the for loop. So if we try to access it outside the for loop at line 11, we will get an error.
10. printed out the value in length, which is 3. length is declared using keywork const (block scope of the entire function) and assigned to the length of the input array, which is 3 in this case. It is never reassigned to other value, so no error is outputed. 
11. [50, 100, 150] -> returns an array of discounted value of the input. discounted is declared at the begining of the function using const, so it has a block scope that spans the entire function and it can be accessed at the end of the function. The keyword return signifies that the function will return the varible after it, in this case is discounted.
12. A. student.name \
    B. student['Grad Year'] \
    C. student.greeting() \
    D. student['Favorite Teacher'].name \
    E. student.courseLoad[0] 
13. A. '32' //number 2 is converted to a string 2 so that it can be concatenated to string 3 \
    B. 1 //string 3 is converted to a number 3 so it can be subtracted 2 \
    C. 3 //null is converted to 0 to do the numeric operation with 3 \
    D. '3null' //null is converted to a string so it can be concatenated to string 3 \
    E. 4 //true is converted to number 1 and added to 3 \
    F. 0 //false is converted to 0 and null is also converted to 0 \
    G. '3undefined' // undefined is converted to a string so it can be concatenated to the string 3 \
    H. NaN //undefined can not be converted to a number -> NaN (not a number), so when it tries to do subtraction with 3, no number is generated and we get a NaN.
14. A. true //string 2 is converted to a number 2 and compared with the number 1 \
    B. false // string 2 and string 12 are both converted to number 2 and 12 and compared \
    C. true //string 2 is converted to number 2 and compared with the other number 2 \
    D. false //===checks equality without type conversion. since two things here are of different type, we get false immediately. \
    E. false //true is converted to 1 and is not equal to number 2 \
    F. true //Boolean() explicitly converts 2 to a boolean value which is true, and then === does a strict equality between these two boolean value. 
15. == is a regular equality check that involves a type conversion if two candidates have different types. === is a strict equality check that doesn't do any type conversion, namely if it finds that two candidates are in different types, it returns false immediately. If they have same data type, then it does regular equality check.
16. in part2-question16.js
17. the function will return an array [2, 4, 6]. In function modifyArray, we pass in doSomething as callback. In the for loop, we go through the entire array. For each element in the array, we call callback, which is actually doSomething, and according to doSomething, we return 2 times the element. The value returned is then pushed into newArr. In the end, modifyArray return the newArr.
18. in part2-question18.js
19. 1 \
    4 \
    3 \
    2
