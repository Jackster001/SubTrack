import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./Reducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {key: 'root', storage: storage,};
const persistedReducer = persistReducer(persistConfig, reducers);
const store= createStore(persistedReducer, {}, applyMiddleware(reduxThunk));
const persistor = persistStore(store);
export {store, persistor}