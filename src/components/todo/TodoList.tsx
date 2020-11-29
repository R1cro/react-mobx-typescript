import React, {useCallback} from 'react';
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/store.hook";
import {IStores} from "../../store/RootStore";

const TodoList = observer(() => {
    const {todosStore} = useStore((stores: IStores) => ({todosStore: stores.todoStore}));

    const completeTodo = useCallback((todo) => {
        todosStore.completeTodo(todo);
    }, [todosStore])

    const removeTodo = useCallback((id) => {
        todosStore.removeTodo(id);
    }, [todosStore]);

    return (
        <ul>
            {todosStore.todos.map((t)  => (
                <li key={t.id}>
                    <input type="checkbox" checked={t.completed} onChange={() => completeTodo(t)} />
                    <div>UserID: {t.userId}</div>
                    <div>Title: {t.title}</div>
                    <button onClick={() => removeTodo(t.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
});

export default TodoList;