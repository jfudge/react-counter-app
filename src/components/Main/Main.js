import React, { Component } from "react";
import './Main.css';
import Form from "../Form/Form";
import Snack from "../Snack/Snack";

class Main extends Component {
  state = {
    snacks: []
  };

  addSnack = snack => {
    this.setState({
      snacks: [snack, ...this.state.snacks]
    });
  };

  onDelete = id => {
    this.setState({
      snacks: this.state.snacks.filter(snack => snack.id !== id)
    });
  };

      render() {
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-7">
                  <div>
                    <Form onsubmit={this.addSnack} />
                  </div>
              </div>
              <div className="col-sm-5">
              <div className="container">
                <table className="table table-striped bg-white">
                  <thead className="thead-dark">
                    <tr>
                      <th>Dessert</th>
                      <th>Calories</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.snacks.map(snack => (
                  <Snack
                    key={snack.id}
                    snack={snack}
                    onDelete={() => this.onDelete(snack.id)}
                  />
                ))}
                <tr>
                  <td>Total:</td>
                  <td>
                    {this.state.snacks.reduce(
                      (totalCalories, snack) => totalCalories + snack.calorie,
                      0
                    )}
                  </td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
      </div>
  </div>
</div>
    );
  }
}

export default Main;
