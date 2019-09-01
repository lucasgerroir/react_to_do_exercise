# Seequent React Coding Test

## Goals

- [ ] Why is the app not running?

The app is not running because we are receiving the following error in the console “TypeError: Cannot read property ‘list’ of undefined”.  This error is occurring because in the ToDoList.js file we are trying to access list attribute of the state object and the object state is not defined. 

The state object is being referred to when we are mapping the state to the props of the toDoListBase component. So when we try to map the state to props we are being told there is no defined object called state.

So the question is why was a state not defined. The answer was adding an “initState” to the todolist store. By doing this we are setting the initial state variables. 

- [ ] Describe your understanding of what the current code base is doing

It all begins in the public index html file. This file becomes the single page of our single page application. In this file we add a div tag with the id of root. This root div becomes the container of our app. The index file begins by importing the necessary libraries to run a react app. This would include react and reactDOM. The app component is then binded to the root div we had created in the index.html file using reactDOM. 

In the App.js file, we import the react library itself,  redux and redux thunk. Redux is a library that helps us manage the state of the data. From there it imports the app component. After that we import the app styling and components we will reference in the main app file. The last import we make is our parent reducer.

Once all the necessary files have been imported we want to set up our redux store. This would include calling redux’s “createStore”, passing our reference to our parent reducer and the middleware thunk.

Finally, we have our main component app function where we set up the foundation of the single page app with the necessary JSX. This would include the redux provider, a parent container div and our main to-do list component. The provider allows any components inside of it to access the redux store.

The main ToDoList component currently has three jobs. Load the list of to-dos, display the list of to-dos and provide the ability to add a to-do.  We load the CSS and redux actions/reducers. The render function is returning the HTML formatted as JSX. Within the JSX we have the to-do list header, add to-do list input with button and the to-do list. We are mapping through the loaded to-dos and display their content. The last part of the file is important. We want to connect the component to the redux store. This way we have access to the store. We map the props of the component to the state and map the stores actions to components props. Now we have the access to call “this.props.loadtodos” in the components “componentWillMount” function. Lastly, we pass the reference to the component to the redux-react connect function so it will be connected. In conclusion, on execution before the component is mounted and rendered we call the “loadtodos” action which dispatches to the reducer and stores the to-dos. The state to-dos are mapped to the components to-dos and we loop through to display them. Voila! A to-do app in action. 

The final file I dissected was the state/todo.js file. This file contains the redux store actions and reducers. The actions dispatch to the reducers passing a payload. The reducers then store the payload. This file is being referenced when creating our store and mapping to the “todolist “component. 


- [ ] Implement the missing Add Todo feature using the framework provided
- [ ] Add some descriptions of unit tests that need to be written
- [ ] Add some CSS to make your TODO list look a bit nicer

## Questions

- [ ] Are there are bad coding practices being used, are there good coding practices that are missing?

Define reducers actions as constants to avoid string typos. 
Do not directly manipulate the state. 
Comments throughout code explaining what each function does. 
Using “bindActionCreators” is not encouraged.

In the JSX of the “TodoList” component, it was using a class instead of className. class is a reserved HTML attribute, so we have to use JSX’s syntax of className.

In the ToDoList component, we are mapping through the to-dos result array. In this array, we were not setting a key for the iterator. I added a key which is good practice.


- [ ] How would you better organize this code? Are there components that should be split out?

I’ve reorganized the project into a better directory structure. I’ve included all the components such as “App” and “toDoList” in the components folder. As well in this folder, I include the CSS and test files for each component.

I’ve broken the redux content in the state folder into reducers and actions. With Vuex they include these folders into a parent folder called the store. That way you have components and store distinctively separated. For this example, I thought it would be overkill. 

I’ve added the reducers under a reducers folder. Within that folder, there is an index, js and a todo.js. In the index we can combine all our reducers. We keep them in separate files based on routes or API calls. Now they are easier to reference. 
I’ve added the actions to an actions folder. Within the action folder, I’ve thrown the load to-dos and add to-dos action calls. 

We could include a store folder and file in which we handle the create store and middleware setup. This way you can include the store into components and access it directly. For this example, it was again overkill.

The last suggestion I will make is storing all our action variables in a constants js file. In this file, we define our actions as constants and include the constants file in the action files. That way we avoid typos which we all do!

I would separate the to-do into a to-do component. Right now, the to-do is basically just a list item with text but this could become more complicated. 
I would also separate out the add to-do section from the to-do list. The add to would probably be used in multiple areas of the app so it should be separated out for reusability. 


- [ ] What is missing from this application to allow it to grow with more components and features?

React Routing library and setup would be necessary if you wanted to add more pages, components or features. 
Integrating gulp to handle compiling. With gulp, you can compile your CSS preprocessor, minify CSS and JavaScript and concatenate files to avoid caching issues.

Adding a CSS preprocessor would be beneficial. LESS or Sass would be great options. For example, if you wanted to have the ability to change a theme leveraging LESS or sasses CSS variables would be beneficial. 

Integrating Webpack would also be a great idea. This would bundle your assets and only serve you the files you need. Making your app load faster.

Adding libraries for material design and icons would save some time. A base material design library would help you build for mobile. 
