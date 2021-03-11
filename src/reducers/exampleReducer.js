import {
  RECEIVE_EXAMPLE,
} from '../actions/exampleActions';


const exampleReducer = ( state, action) => {
  switch(action.type){
    case RECEIVE_EXAMPLE:
      return Object.assign({}, state, {example: action.example});
    default:
      return state;
  }
};

export default exampleReducer;
