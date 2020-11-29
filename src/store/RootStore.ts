import {CounterStore} from "./CounterStore";
import  {TodoStore} from "./TodoStore"

export interface IStores {
    todoStore: TodoStore,
    counterStore: CounterStore
}

export class RootStore {
    todoStore: TodoStore;
    counterStore: CounterStore;

    constructor() {
        this.todoStore = new TodoStore(this);
        this.counterStore = new CounterStore(this);
    }
};