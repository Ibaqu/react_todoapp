import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration : this.props.todoItem_prop.completed ? 'line-through' : 'none'
        }
    }

    render() {
        //Displays the sigle todoItem
        const { id , title } = this.props.todoItem_prop;
        return (
            <div style = { this.getStyle() }>
                <p>
                    <input type = "checkbox" 
                        onChange = {this.props.markComplete.bind(this, id)} />
                    { title }
                </p>
            </div>
        );
    }
}

//Prop types
TodoItem.propTypes = {
    todoItem_prop : PropTypes.object.isRequired
}
export default TodoItem;