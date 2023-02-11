import React, { Component } from 'react'

export class NewsItem extends Component {
constructor(){
  super();
  console.log("Hello, I am constructer");
  this.state={

  }
}

  render() {
    let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://foxbaltimore.com/resources/media/0a270d88-1964-4c7a-a52e-8d4d5b95077c-large16x9_VHELOSHOCKTRAUMArender.transfer_frame_792.jpeg?1676009085175":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
