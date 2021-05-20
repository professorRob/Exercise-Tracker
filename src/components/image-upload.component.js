import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImageUpload extends Component(){
    
    render(){
        return(
            <div className="process">
                <h4 className="process_heading">Process: Using FireBase Storage</h4>
                <p className="process_details">Upload Image to FireBase Storage and retrieve a reference to the image</p>

                <input type="file" className="process_upload-btn" onChange={(e) => this.ImageUpload(e, "firebase")} />
                <img src={this.state.firebaseImage} alt="upload" className="process_image" />
            </div>
        )
    } 
}
