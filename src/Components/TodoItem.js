import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration : this.props.todoItem_prop.completed ? 'linethrough' : 'none'
        }
    }

    render() {
        //Displays the sigle todoItem
        return (
            <div style = { this.getStyle() }>
                <p>{ this.props.todoItem_prop.title }</p>
            </div>
        );
    }
}

//Prop types
TodoItem.propTypes = {
    todoItem_prop : PropTypes.object.isRequired
}
export default TodoItem;