import React from "react";

export default function Table(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.snack.text}</td>
        <td>{props.snack.calorie}</td>
        <td>
        </td>
      </tr>
    </React.Fragment>
  );
}
