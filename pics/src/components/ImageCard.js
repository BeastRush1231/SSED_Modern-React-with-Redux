import React from 'react';

class ImageCard extends React.Component{
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
    // document.querySelector('img')
    // 取得dom元素
  }

  componentDidMount() {
    console.log(this.imageRef);
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img 
          ref={this.imageRef}
          alt={description}
          src={urls.regular} 
        />
      </div>
    )
  } 
};

export default ImageCard;