import {NewToDoForm, NewToDoFormRef} from './NewToDoForm';
import { ToDoList } from './ToDoList';
import {useEffect, useRef, useState} from 'react';
import { ToDo } from '../model/todo';
import { deleteToDo, loadToDos, storeNewToDo } from '../persistence';

export function ToDoScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const newToDoComponentRef = useRef<NewToDoFormRef>(null);

  useEffect(() => {
    const todos = loadToDos();
    setTodos(todos);
  }, []);

  useEffect(() => {
    console.log('NewToDoForm ref:', newToDoComponentRef.current)
  }, []);
  
  function addToDo(newToDo: ToDo) {
    const allToDos = storeNewToDo(newToDo);
    setTodos(allToDos);
  }

  function removeToDo(toDo: ToDo) {
    const allToDos = deleteToDo(toDo);
    setTodos(allToDos);
    newToDoComponentRef.current?.setTitle(toDo.title);
  }

  return (
    <div>
      <NewToDoForm onAddToDo={addToDo} ref={newToDoComponentRef} />

      <div className="main" >
        <ToDoList todos={todos} onRemoveToDo={removeToDo} />
      </div>
    </div>
  );
}
