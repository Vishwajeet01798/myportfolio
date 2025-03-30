import React, { Component } from 'react'
import '../components/LinkImgStyle.css';

class LinkImg extends Component {
    render(){
  return (
    <div className='link-img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}
export default LinkImg