import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios";

//const serv = "https://family-meme.herokuapp.com/";

export default class CreateMeme extends Component {
  constructor(props) {
    super(props);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeMemeImage = this.onChangeMemeImage.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      author: "",
      memeImage: null,
      date: new Date(),
    };
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value,
    });
  }

  onChangeMemeImage(e) {
    this.setState({
      memeImage: e.target.files[0],
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('author', this.state.author);
    formData.append('memeImage', this.state.memeImage);
    formData.append('date', this.state.date);

    console.log(formData);
    Axios.post("https://family-meme.herokuapp.com/meme/add", formData).then(
      (res) => console.log(res.data)
    );

    this.setState({
      author: "",
      memeImage: "",
      date: new Date()
    });
  }
  render() {
    return (
        
      <div className="container">
        <h3>Uplaod Meme Photo</h3>
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label>Who Dis: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              placeholder="Dis Be?"
            />
          </div><br /><br />
          <div className="form-group">
            <label>Choose Meme Image</label>
            <input
              type="file"
              filename="memeImage"
              required
              className="form-control-file"
              onChange={this.onChangeMemeImage}
            />
          </div><br /><br />
          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div><br /><br />
          <div className="form-group">
            <input
              type="submit"
              value="Upload Meme"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
