import {IStores} from '../store/RootStore';
import {useContext} from 'react';
import {RootStoreContext} from "../context/RootContext";

export default function useStore<T>(mapStateToProps?: (stores: IStores) => T): T {
    const stores = useContext(RootStoreContext) as IStores;

    if (typeof mapStateToProps === 'function') {
        return mapStateToProps(stores);
    }

    return stores as any;
}