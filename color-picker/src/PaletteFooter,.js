import React, { Component } from "react";

export default class PaletteFooter extends Component {
  render() {
    const { paletteName, emoji } = this.props;
    return (
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    );
  }
}
