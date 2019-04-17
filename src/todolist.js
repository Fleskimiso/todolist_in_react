import React from "react";

const Todolist = ({todoitems, deleteelem}) =>{

    const todolistjsxarray = todoitems.length ? (
        todoitems.map(todo => {
            return( <div className="collection-item center" key={todo.id}
            onClick={() => {deleteelem(todo.id)}}>
            <span>{todo.content}</span>
        </div>)
        })
    ) : (<p className="center purple-text">
        You have no to todo's left you should be happy 
    </p>);
    return(
        <div className="Todo Collection">
            {todolistjsxarray}
        </div>
    )
}
export default Todolist;