import React from 'react';

const TodoListItem = (props) => {
    function deleteTodo() {
        props.deleteTodo(props.todo.id);
    }
    function setIsCompleted() {
        props.setIsCompleted(props.todo.id)
    }
    function dragStart(e) {
        console.log('shf');
        props.dragStart(e)
    }
    function dragEnter(e) {
        props.dragEnter(e)
    }

    if(props.todo.isCompleted) {
        return (
            <li onDragStart={dragStart} onDragEnter={dragEnter}>
                <span style={{textDecoration:"line-through"}} 
                    onClick={setIsCompleted}>
                    {props.todo.name}
                </span>
                <button onClick={deleteTodo}>Delete</button>
            </li>
        );
    }
    else {
        return (
            <li onDragStart={dragStart} onDragEnter={dragEnter}>
                <span onClick={setIsCompleted}>
                    {props.todo.name}
                </span>
                <button onClick={deleteTodo}>Delete</button>
            </li>
        );
    }
}

export default TodoListItem