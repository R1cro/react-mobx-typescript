import React, {useCallback} from "react";
import {observer} from "mobx-react-lite";
import useStore from "../../hooks/store.hook";
import {IStores} from "../../store/RootStore";

const Counter = observer(() => {
    const {counter} = useStore((stores: IStores) => ({counter: stores.counterStore}))
    const onIncrement = useCallback(() => {
        counter.increment()
    }, [counter]);

    const onDecrement = useCallback(() => {
        counter.decrement()
    }, [counter])

  return (
    <div>
        {'Counter => ' + counter.count}
        {'Double => ' + counter.double}

        <button onClick={onIncrement}>Increment!</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
  )
})

export default Counter;