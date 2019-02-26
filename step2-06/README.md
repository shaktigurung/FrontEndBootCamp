# Step 2.6

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

Redux: Dispatching Actions and Examining State.

In this step, we learn about `dispatch` and `getState()`. Dispatching action messages to the store is the only means by which to inform the reducers to modify the shared state tree.

We also see how we may compose the reducers according to the shape.

If you want a really neat UI to show what the store looks when actions are dispatched to the store, use this Chrome extension:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

# Exercise

## Visualize the state changes with Chrome extension

1. Install [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

2. Open the inspector panel entitled **Redux**

3. Modify `exercise/src/index.tsx` to dispatch actions

## Playing with dispatching actions inside tests

1. open the `exercise/src/reducers/reducer.spec.ts`

2. Follow the instructions to fill out the reducer tests

3. Run the tests with `npm test`
