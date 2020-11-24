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
                <button id="wrapper__button__increment" 
                                className="button"
                                onClick={this.addOne}>
                          <i className="fa fa-chevron-up"></i>
                        </button>
                <h3 className="count">{this.state.count}</h3>
                <button   id="wrapper__button__decrement" 
                          className="button"
                                onClick={this.deleteOne} >
                          <i className="fa fa-chevron-down"></i>
                        </button>
                        <div className="col-md-12">
                        <button 
                          id="wrapper__button__reset"
                                onClick={this.resetCounter}
                                className="button"
                                >
                          <i className="fa fa-refresh"></i>
                        </button>  
                        </div>
                         
            </div>
            <div className="button-container mt-2 bg-white">
          
              <input />
              {/* <button className="btn btn-primary float-right m-4">PRIMARY</button> */}
            </div>
          </div>
        );
    }
  }

export default Counter;