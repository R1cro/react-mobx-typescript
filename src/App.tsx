import React from 'react';
import TodoList from "./components/todo/TodoList";
import {observer} from "mobx-react-lite";
import {RootStoreProvider} from "./context/RootContext";
import useStore from "./hooks/store.hook";
import Counter from "./components/counter/Counter";


const App: React.FC = observer(() => {
    const {todoStore, counterStore} = useStore();
    return (
    <div className="App">
      <RootStoreProvider value={{todoStore, counterStore}}>
        <h1>React + MobX + TypeScript</h1>
        <TodoList />
        <Counter />
      </RootStoreProvider>
    </div>
    );
})

export default App;
