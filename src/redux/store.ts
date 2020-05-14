import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { appAction } from "../types/details";
export type appState = ReturnType<typeof reducer>
const store = createStore(reducer, applyMiddleware(thunk as ThunkMiddleware<appState,appAction>));

export default store;
