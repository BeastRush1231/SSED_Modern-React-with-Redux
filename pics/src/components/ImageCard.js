import React from 'react';

class ImageCard extends React.Component{
  constructor(props) {
    super(props);

    this.state = { span: 0 };

    this.imageRef = React.createRef();
    // document.querySelector('img')
    // 取得dom元素
  }

  componentDidMount() {
    // console.log(this.imageRef.current.clientHeight);
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({spans: spans});
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
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