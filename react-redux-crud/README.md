## React Redux CRUD example
`npm install -g create-react-app`
`create-react-app react-redux-crud`
`cd react-redux-crud`
`npm start`

`npm install --save redux react-redux`

action -> dispatcher -> store -> view -> action -> ..

store - store the state
dispatch an action - call the dispatch method in store object with an action  
reducer - a function the takes the current state and an action that was 'dispatched' as it's parameters and returns the new state.
  `function (state, action) {
    return newState;
  }`

** connect() gives access to dispatch as a prop -> this.props.dispatch()
