import { ToDoList } from '../../components/ToDoList.tsx';
import { useEffect, useState } from 'react';
import { ToDo } from '../../model/todo.ts';
import { deleteToDo, loadToDos } from '../../persistence.ts';

export function DoneScreen() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  // Exercise: load the done ToDo Items

  function removeToDo(toDo: ToDo) {
    const allToDos = deleteToDo(toDo);
    setTodos(allToDos.filter((t) => t.completed));
  }

  return (
    <div>
      <div className="main">
        <ToDoList todos={todos} onRemoveToDo={removeToDo} />
      </div>
    </div>
  );
}
