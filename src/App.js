import React, {useState} from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ToDoList from './components/ToDoList';
import './App.css';


const SortableList = SortableContainer(ToDoList);

const todosInit = [
  {id: 1, content: 'content 1', isDone: false},
  {id: 2, content: 'content 2', isDone: false},
  {id: 3, content: 'content 3', isDone: false},
  {id: 4, content: 'content 4', isDone: false},
  {id: 5, content: 'content 5', isDone: false}
];

const App = () => {
  const [todos, setTodos] = useState(todosInit);
  const onSortEnd = (e) =>{
    var newTodos = arrayMove(todos, e.oldIndex, e.newIndex )
    setTodos(newTodos)
  };
  console.log(todos, '-todos-');
  return (<div className="App">
      <SortableList items={todos} onSortEnd={onSortEnd}/>
    </div>);
};

export default App;
