import React, { Component } from 'react';
import Todos from './Components/Todos';

class App extends Component {
  
  //State is a javascript obj with an array of objects named Todos
  state = {
    Todos: [
      {
        id: 1,
        title: "Test1",
        completed: false
      },
      {
        id: 2,
        title: "Test2",
        completed: true
      },
      {
        id: 3,
        title: "Test3",
        completed: false
      }
    ]
  }

  render() {
    //We pass the Todos in state as a prop. Here 'todos_prop' is the prop
    return (
      <div className="App">
        <Todos todos_prop = {this.state.Todos} />
      </div>
    );
  }a
}

export default App;
