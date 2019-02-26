## Exercise

### Write updateRemaining function

1. Get a reference to the span with the `remaining` class, and store it in a variable
2. Use [querySelectAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) to get all of the todos.
3. Set the `innerText` of the remaining span to the length of those todos.
4. Add updateRemaining() to addTodo

### Write a clearCompleted function

1. Get a reference to all of the todos with [querySelectAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
2. Use a `for (let todo of todos)` loop to iterate over each todo
3. Inside the for loop write an `if` statement to test if the `input` inside of the todo has a checked value of true
   > Hint: you can use querySelector on any HTML node to find child elements within
4. Call `todo.remove()` for any todo whos input check is true
5. After the loop is done, run `updateRemaining()`
6. Attach this function to the footer button
7. Test it out!
