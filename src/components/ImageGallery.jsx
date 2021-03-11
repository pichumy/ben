import React from 'react';
import { receiveImage } from '../actions/imageActions';
import { connect } from 'react-redux';

class ImageGallery extends React.Component {
  componentDidMount(){
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", '/images/iceland', true);
    // xhr.responseType = "document";
    // xhr.onload = () => {
    //   if(xhr.status === 200){
    //     var elements = xhr.response.getElementsByTagName("a");
    //     for(let x of elements){
    //       if(x.href.match(/\.(jpe?g|png|gif)$/)) {
    //           let urlObject = {};
    //           urlObject.url = x.href;
    //           this.props.receiveImage(urlObject);
    //       }
    //     }
    //   }
    // }
    // xhr.send();
    // the api request didn't work, manual populate
    for(let i = 1; i < 73; i++){
        let urlObject = {};
        urlObject.url = `/images/iceland/test - ${i}.jpeg`;
        this.props.receiveImage(urlObject);
    }
  }
  render(){
    return(
      <div className="image-gallery">
        {
          Object.keys(this.props.images).map(imageUrl => {
            return(
              <img key={imageUrl} alt="" src={imageUrl}>
              </img>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = store => ({
  images: store.images.images
})

const mapDispatchFromProps = (dispatch) => ({
  receiveImage: (imageObject) => dispatch(receiveImage(imageObject))
})

export default connect(mapStateToProps, mapDispatchFromProps)(ImageGallery);
