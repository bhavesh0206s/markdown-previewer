import React from "react";
import Preview from "./Preview";
import TextArea from "./TextArea";
import "./app.css"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleInput = e => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div>
        <TextArea enteredText={this.handleInput} />
        <Preview input={this.state.input} />
      </div>
    );
  }
}

export default App;
