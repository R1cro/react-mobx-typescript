import {makeAutoObservable, when} from "mobx";
import {RootStore} from "./RootStore";

export class CounterStore {
  private rootStore: RootStore;
  public count: number = 0;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    when(
        () => this.count > 10,
        () => alert('Counter value is more than 10!')
    )
  }

  increment = (): void => {
    this.count = this.count + 1
  }

  decrement = (): void => {
    this.count = this.count - 1
  }

  get double(): number {
    return this.count * 2
  }
}