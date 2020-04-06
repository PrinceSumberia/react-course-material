import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const disabled = this.props.score !== undefined;
    return (
      <tr
        onClick={disabled ? null : this.props.doScore}
        className={
          this.props.score
            ? "RuleRow RuleRow-disabled"
            : "RuleRow RuleRow-active"
        }
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
