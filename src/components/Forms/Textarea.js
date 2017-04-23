import React from "react";
import "./Textarea.css";

const DEFAULT_HEIGHT = 50;

export default class Textarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: DEFAULT_HEIGHT,
      value: this.props.text
    };
  }

  handleChange = event => {
    const { value, scrollHeight } = event.target;
    this.setState({ value, height: scrollHeight });
  };

  render() {
    const { height, value } = this.state;

    return (
      <textarea
        className="textarea"
        name="textarea"
        id="textarea"
        value={value}
        style={{
          height
        }}
        onChange={this.handleChange}
      />
    );
  }
}
