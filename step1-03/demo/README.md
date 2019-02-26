# Javascript Demo

Now that we a UI that looks like a todo app, we need to add functionality to make it **function** like a todo app. In this example we are going to use raw Javascript explicitly modify our application as we interact with it. This will be in stark contrast to the implicit approach we will take when we do this with React in the next exercise.

> Keep an eye on how often user actions directly modify the HTML on the page. You'll see this number drop to zero when we start using React.

## Demo

This demo starts off with a few elements already in place. Let's walk through what's already here.

- **clearInput()** - This is a generic, reusable function that takes in a `selector` paramater, finds the first matching element, and sets the element's value to an empty string. This direct modification is called a side effect.
- **getTodoText()** - This is a quick helper function that returns the value inside of our textfield. Notice how some functions return values and how you can set that return to a variable.
- **addTodo()** - This is the primary logic of our todo app. Here's how the lines break down.
  1. `todo` is set to equal the first todo item
  2. `newTodo` is a clone of todo. Passing true means it is a deep clone, so we get the todo's children as well. Cloning does not duplicate the DOM node. We'll need to insert it in step 4
  3. We set the innerText of the `<span class='title'>` to the value returned from getTodoText
     > Note that if we left off the `()` we'd actully be assiging innerText to the 'function' instead of the function return
  4. Insert our new todo into the todo's parent (the `ul`), before our reference todo. [insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)
- **filter()** - This function takes in a `filterName` string, and a `button` which is a reference to the clicked button.
  1. Remove any `selected` class names
  2. Add `selected` to the clicked button
  3. Get all of the todos with [querySelectAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll), and then loop through them.
  4. Set the `hidden` property of each todo based on the filter/state combination

### Triggering functions from click events

Now that we have a working `addTodo` function, we need a way to trigger it when the user is ready. This can be done in two ways.

1. We can find the element with querySelector, then set its `onclick` to our function

```js
document.querySelector('.addTodo .submit').onclick = addTodo;
```

2. We can add the function directly to our button in our HTML

```html
<button onclick="addTodo()" class="submit">Add</button>
```

Today we'll use #2, as this is the way it will work in React as well.
