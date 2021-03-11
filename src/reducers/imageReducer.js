import {
  RECEIVE_IMAGE,
} from '../actions/imageActions';


const imageReducer = (state = {images: []}, action) => {
  switch(action.type){
    case RECEIVE_IMAGE:
      return Object.assign({}, state,
        {
          images: Object.assign({}, state.images, {[action.image_object.url]: action.image_object})
        });
    default:
      return state;
  }
};

export default imageReducer;

/*
request(apiBackendUrl, (start, end))
*/
