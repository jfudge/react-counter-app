import React, { Component } from "react";
import Counter from '../Counter/Counter';

const shortid = require("shortid");

export default class Form extends Component {
  state = {
    showform: false,
    text: "",
    calorie: "0"
  };

  toggleChange = () => {
    this.setState({
      showform: !this.state.showform
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onsubmit({
      id: shortid.generate(),
      text: this.state.text,
      calorie: parseInt(this.state.count)
    });
    this.setState({
      text: "",
      calorie: ""
    });
  };

  render() {

      return (
        <React.Fragment>
          <Counter />
          <div className="bg-white p-2 mt-2">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="text"
                  value={this.state.text}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="Name"
                  id="snack"
                />
              </div>
            </div>
            <div className="col-md-6">
              <button onSubmit={this.handleSubmit} className="p-btn btn btn-info mr-2">
                PRIMARY
              </button>
            </div>
            </div>
          </form>
          </div>
        </React.Fragment>
      );
    }
  }

