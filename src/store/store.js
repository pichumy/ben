import { applyMiddleware, createStore } from "redux";
import rootReducer from '../reducers/rootReducer';
import thunk from "redux-thunk";

function configureStore(){
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}

export default configureStore();
