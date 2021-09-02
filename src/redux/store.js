import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(applyMiddleware(thunk), console.log('store'));

export default store;
