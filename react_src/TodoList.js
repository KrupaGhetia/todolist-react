import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    return (
        <div>{props.todos.map((todo, i) => 
            <TodoListItem 
                todo={todo} key={i} 
                deleteTodo={props.deleteTodo} 
                setIsCompleted={props.setIsCompleted}
                dragStart={props.dragStart}
                dragEnter={props.dragEnter}
            />
        )}
        </div>
    )
}

export default TodoList