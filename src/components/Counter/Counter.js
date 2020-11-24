import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

  state ={
    count:0
  }
//addOne function
addOne =() =>{
  this.setState({
    count : this.state.count + 1
  })
}
//deleteOne function
deleteOne =()=>{
  if(this.state.count>0)
      this.setState({
    count : this.state.count - 1
  })
 
}
//reset counter
resetCounter = () =>{
  this.setState({
    count:0
  })
}

    render() {
      let { count } = this.state;
        return (
          <div>
            <div className="raised-block bg-white text-center">
                <button id="up" 
                                className="button"
                                onClick={this.addOne}>
                          <i className="fa fa-chevron-up"></i>
                        </button>
                <h3 className="count">{this.state.count}</h3>
                <button   id="down" 
                          className="button"
                                onClick={this.deleteOne} >
                          <i className="fa fa-chevron-down"></i>
                        </button>
                        <div className="col-md-12">
                        <button 
                          id="reset"
                                onClick={this.resetCounter}
                                className="button"
                                >
                          <i className="fa fa-refresh"></i>
                        </button>  
                        </div>
                         
            </div>
            <div className="button-container mt-2 bg-white">
              <div className="row">
              <div className="col-md-6">
                <div className="wrapper">
                  <input type="email" className="form-control" id="name" aria-describedby="name" placeholder="Name" />
                </div>
              </div>
              <div className="col-md-6">
              <button className="p-btn btn btn-primary btn-lg float-right m-4">PRIMARY</button>
              </div> 
              </div>
            </div>
          </div>
        );
    }
  }

export default Counter;