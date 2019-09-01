# Seequent React Coding Test

## Goals

- [ ] Why is the app not running?

The app is not running because we are receiving the following error in the console “TypeError: Cannot read property ‘list’ of undefined”.  This error is occurring because in the ToDoList.js file we are trying to access list attribute of the state object and the object state is not defined. 

The state object is being referred to when we are mapping the state to the props of the toDoListBase component. So when we try to map the state to props we are being told there is no defined object called  state.

So the question is why was state not defined. The answer was adding an “initState” to the todolist store. By doing this we are setting the initial state variables. 


- [ ] Describe your understanding of what the current code base is doing
- [ ] Implement the missing Add Todo feature using the framework provided
- [ ] Add some descriptions of unit tests that need to be written
- [ ] Add some CSS to make your TODO list look a bit nicer

## Questions

- [ ] Are there are bad coding practices being used, are there good coding practices that are missing?
- [ ] How would you better organize this code? Are there components that should be split out?
- [ ] What is missing from this application to allow it to grow with more components and features?
