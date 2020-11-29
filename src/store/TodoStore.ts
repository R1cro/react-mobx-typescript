import {makeAutoObservable, observable, action, runInAction, autorun, when} from "mobx";
import {RootStore} from "./RootStore";

export interface ITodoItem {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export class TodoStore {
    private rootStore: RootStore;
    public todos: ITodoItem[] = [];

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this, {
            todos: observable,
            fetchTodos: action,
            addTodo: action,
            removeTodo: action,
            completeTodo: action
        })

        autorun(
            () => this.fetchTodos()
        )

        when(
            () => this.todos.length > 0,
            () => console.log('TODO list has been fetched from the server...')
        )
    }

    async fetchTodos() {
        try {
            await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
                .then((response) => response.json())
                .then((todos) => {
                    runInAction(() => {
                        console.log('TODOS ->', todos)
                        this.todos = todos
                    })
                });
        } catch (e) {
            runInAction(() => {
                console.log('ERROR', e)
            })
        }
    }

    addTodo = (todo: ITodoItem): void => {
        this.todos.push(todo)
    }

    removeTodo = (id: number) => {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo = (todo: ITodoItem) => {
        todo.completed = !todo.completed;
    }
}