import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { rootSaga } from "../saga/rootSaga";
import { rootReducer } from "./reducer/rootReducer";


const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);