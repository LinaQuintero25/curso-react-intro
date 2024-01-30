import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import React from "react";

import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";

function AppUI() {
  const{
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      {/* <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => ( */}
           <TodoList>
           {loading && (
             <>
               <TodosLoading />
               <TodosLoading />
               <TodosLoading />
             </>
           )}
           {error && <TodosError />}
           {!loading && searchedTodos.length === 0 && <EmptyTodos />}
 
           {searchedTodos.map((todo) => (
             <TodoItem
               key={todo.text}
               text={todo.text}
               completed={todo.completed}
               onComplete={() => completeTodo(todo.text)}
               onDelete={() => deleteTodo(todo.text)}
             />
           ))}
         </TodoList>
        {/* )}
       
      </TodoContext.Consumer> */}
      <CreateTodoButton 
        setOpenModal ={setOpenModal}
      />
      
      {openModal &&(
        <Modal>
          Modal creado
        </Modal>
      )

      }
    </>
  );
}

export { AppUI };
