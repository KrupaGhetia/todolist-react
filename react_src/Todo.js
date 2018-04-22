import React from 'react';
import AddTodoListItem from './AddTodoListItem';
import TodoList from './TodoList';

class Todo extends React.Component {
  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setIsCompleted = this.setIsCompleted.bind(this);
    this.isBefore = this.isBefore.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.dragEnter = this.dragEnter.bind(this);
    this.source;
    this.state = {
      defId: 1000,
      todos: []
    };
  }

  isBefore(src, currTrgt) {
    if(src.parentNode == currTrgt.parentNode) {
      for(let cur = src; cur; cur=cur.previousSibling) {
        if(cur === currTrgt) {
          return true;
        }
      }
    }
  }

  dragStart(e) {
    this.source = e.target;
    e.dataTransfer.effectAllowed = 'move';
  }

  dragEnter(e) {
    if(this.isBefore(this.source, e.target)) {
      e.target.parentNode.insertBefore(
        this.source, e.target
      );
    } else {
      e.target.parentNode.insertBefore(
        this.source, e.target.nextSibling
      );
    }
  }

  addTodo(todoObj) {
    this.setState({
      defId: this.state.defId + 1,
      todos: this.state.todos.concat(todoObj),
    });
  }

  deleteTodo(todoId) {
    let index;
    this.state.todos.map((todo, i) =>{
      if(todo.id === todoId) {
        index = i;
      }
    });
    let tempTodo = this.state.todos;
    tempTodo.splice(index, 1);
    this.setState({
      todos: tempTodo
    });
  }

  setIsCompleted(todoId) {
    let tempTodo = this.state.todos.map(todo => {
      if(todo.id === todoId && todo.isCompleted === false) {
        todo.isCompleted = true;
      }
      else if(todo.id === todoId && todo.isCompleted === true) {
        todo.isCompleted = false;
      }
      return todo;
    });
    this.setState({
      todos: tempTodo
    });
  }

  render() {
    return (
      <div>
        <AddTodoListItem 
          addTodo={this.addTodo} 
          defId={this.state.defId} 
        />
        <TodoList 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo}
          setIsCompleted={this.setIsCompleted}
          dragStart={this.dragStart}
          dragEnter={this.dragEnter}
        />
      </div>
    );
  }
}

export default Todo