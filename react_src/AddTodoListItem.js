import React from 'react';

const AddTodoListItem = (props) => {
    function addTodo(e) {
        e.preventDefault();
        const todoObj = {
            id: props.defId,
            name: e.target.elements.task.value.trim(),
            isCompleted: false
        };
        props.addTodo(todoObj);
        e.target.elements.task.value = '';
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" name="task" />
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default AddTodoListItem