import React from "react";
import { TodoContext} from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const{
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [netTodoValue, setNewTodoValue]= React.useState('');

    const onSumit = (event) =>{
        event.preventDefault();
        addTodo(netTodoValue);
        setOpenModal(false);
    };

    const onCancel= (event) =>{
        setOpenModal(false)
    };

    const onChange =(event)=>{
        setNewTodoValue(event.target.value);
    };

  return (
    <form onSubmit={onSumit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        value={netTodoValue}
        onChange={onChange}
        placeholder="Cortar cebolla para el Almuerzo" />
     <div className="TodoForm-buttonContainer">
        <button 
            type="button"
            className="TodoForm-button
            TodoForm-button--cancel"
            onClick={onCancel}
        >Cancelar</button>
        <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
        </div>
    </form>
  );
}

export { TodoForm };
