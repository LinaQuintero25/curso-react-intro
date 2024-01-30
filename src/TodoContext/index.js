import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){

    const {
        item :todos,
        saveItem:saveTodos,
        loading,
        error,
  } = useLocalStorage('TODOS_V1',[]);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);   
  
    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
  
    const searchedTodos = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase());
    });
  
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
  
    console.log("los usuarios buscan todos de" + searchValue);

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export{ TodoContext, TodoProvider };