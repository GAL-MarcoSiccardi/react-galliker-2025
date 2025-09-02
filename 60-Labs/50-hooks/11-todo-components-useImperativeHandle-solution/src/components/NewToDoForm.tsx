import {ChangeEvent, FormEvent, ForwardedRef, forwardRef, RefAttributes, RefObject, useImperativeHandle, useState} from 'react';
import { ToDo } from '../model/todo';

interface NewToDoFormProps {
  onAddToDo: (todo: ToDo) => void;
}
export interface NewToDoFormRef {
  setTitle: (initialTitle: string) => void;
}

function NewToDoFormComponent({ onAddToDo }: NewToDoFormProps, ref: ForwardedRef<NewToDoFormRef> ) {
  const [toDoTitle, setToDoTitle] = useState('');

  useImperativeHandle(ref, () => {
    return {
      setTitle: (initialTitle: string) => setToDoTitle(initialTitle),
    };
  }, []);
  
  
  function formChange(e: ChangeEvent<HTMLInputElement>) {
    setToDoTitle(e.target.value);
  }

  function addToDo(e: FormEvent) {
    e.preventDefault();
    let newToDo: ToDo = {
      id: Math.random(),
      title: toDoTitle,
      completed: false,
    };
    onAddToDo(newToDo);
    setToDoTitle('');
  }

  return (
    <form className="new-todo" onSubmit={addToDo}>
      <input
        id="todo-text"
        name="toDoTitle"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        autoComplete="off"
        value={toDoTitle}
        onChange={formChange}
      />

      <button id="add-button" className="add-button">
        +
      </button>
    </form>
  );
}

export const NewToDoForm = forwardRef<NewToDoFormRef, NewToDoFormProps>(NewToDoFormComponent);
