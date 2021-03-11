export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";

export const receiveImage = (image_object) => {
  return { type: RECEIVE_IMAGE, image_object }
}
