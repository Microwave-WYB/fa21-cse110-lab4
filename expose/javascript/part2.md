# Part 2

1. `3` will be printed. The variable `i` is declared as `var`, so it can be accessed within the function `discountPrices()`. When `i` was increased to 3, the for loop check failed, and the loop broke. So the value of `i` after the for loop is `3`.

2. Error. `discountedPrice` is declared with `var` keyword can be only accessed within the `discountPrices()` function.

3. `150` is printed. Variable `finalPrice` is declared as a global variable, which can be accessed anywhere in the script. Since line 14 is outside the for loop, the value of `finalPrice` will remain the last value in the loop, 150.

4. The function will return an array `[ 50, 100, 150 ]`. Since `discounted` is declared with `var` , so can be accessed within the function. And it's declared as an array, and every value in the input array `prices` will be calculated according to the discount and be pushed into `discounted`. 

5. Error. `i` declared with `let` cannot be accessed outside the for loop block. 

6. Error. `discountedPrice` declared with `let` cannot be accessed outside the for loop block.

7. `150` is printed. Variable `finalPrice` is declared as a global variable, which can be accessed anywhere in the script. Since line 14 is outside the for loop, the value of `finalPrice` will remain the last value in the loop, 150.

8. The function will return an array `[ 50, 100, 150 ]`. Since `discounted` is declared with `let`, so can be accessed within the block (which is the function). It's also declared as an array, and every value in the input array `prices` will be calculated according to the discount and be pushed into `discounted`. 

9. Error. `const` variables cannot be modified. 

10. `3` will be printed. The length of `prices` is `3`, and `length` variable declared as `const` is never modified after the declaration. 

11. The function will return`[50,100,150]`, the original prices with 0.5 discount off, since the code does not run into error and should return the prices after the discount.

12. A. `student.name`

    B. `student['Grad Year']`

    C. `student.greeting.apply()`

    D. `student['Favorite Teacher'].name`

    E. `student.courseLoad[0]`

13. ```javascript
    > '3' + 2
    '32'				// a string with add operation will convert to string concatenation
    > '3' - 2
    1					// a string with number subtract a number will convert to number subtraction
    > 3 + null
    3					// a number plus null is same as plus 0
    > '3' + null
    '3null'				// a string with add operation will convert to string concatenation
    > true + 3
    4					// true is equal to 1 when being operated with a number
    > false + null
    0					// false and null both equal to 0 when added together
    > '3' + undefined
    '3undefined'		// a string with add operation will convert to string concatenation
    > '3' - undefined
    NaN					// undefined will not become 0, it will become NaN
    ```

14. ```javascript
    > '2' > 1
    true				// a string becomes number when comparing with a number
    > '2' < '12'
    false				// when comparing strings, compare according to the dictionary orders
    > 2 == '2'
    true				// a string becomes number when comparing with a number
    > 2 === '2'
    false				// the === operator return true only when both type and value are the same
    > true == 2
    false				// true is equal to 1 when comparing with a nummber
    > true === Boolean(2)
    true				// Boolean(2) becomes true
    ```

15. `==` operator allow type conversion (e.g. string will convert to number when comparing with number), it returns true when the values after the conversion are the same. `===` operator only returns true when both the types and the values are the same. 

16.  <a href="part2-question16.js">part2-question16.js</a>

17. output: `[ 2, 4, 6 ]`. Each time in the for loop, an entry of the input array will be manipulated by the callback function and be pushed into `newArr`, in this case, each entry will be doubled. Therefore, the final result is simple `[1,2,3]` doubled. 
18.  <a href="part2-question16.js">part2-question18.js</a>
19. 