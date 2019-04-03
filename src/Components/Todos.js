import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        //We access the todos_prop and pass each object to todo_obj
        return this.props.todos_prop.map((todoItem_obj) => (
            //Array list created by map needs a unique key, which is set by obj todo.id
            <TodoItem key = { todoItem_obj.id } 
                    todoItem_prop = { todoItem_obj } 
                    markComplete = {this.props.markComplete}/>
         ));
    }
}

//Prop types
Todos.propTypes = {
    todos_prop : PropTypes.array.isRequired
}

export default Todos;
