import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.state = {
      count: 0,
      value: 0,
      colorClass: "zero",
      name: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }

  // event handler is a class prop
  IncreaseCount = e => {
    e.preventDefault();
    var previousCount = this.state.count;
    var count = this.state.count + 1;
    this.colorChange(previousCount, count);
    this.setState({ count });
  }

  DecreaseCount = e => {
    e.preventDefault();
    var previousCount = this.state.count;
    var count = this.state.count - 1;
    this.colorChange(previousCount, count);
    this.setState({ count });
  }

  handleChange = e => {
    var value = e.target.value;
    this.setState({ value });
  }

  handleSubmit = e => {
    e.preventDefault();
    var previousCount = this.state.count;
    var count = this.state.value;
    this.colorChange(previousCount, count);

    this.setState({ count });

    var value = 0;
    this.setState({ value });

    this.setState({ name: this.textInput.current.value });
  }

  colorChange = (previousCount, count) => {
    var colorClass;

    if (count < 0) {
      colorClass = "negative";
      this.setState({ colorClass });
    }

    if (count === 0) {
      colorClass = "zero";
      this.setState({ colorClass });
    }

    if (count > 0) {
      colorClass = "positive";
      this.setState({ colorClass });
    }
  }

  render() {
    return (
      <body>
        <main>
          <div className="wrapper">
            <h2>Clickbait! Welcome, <span>{!!this.state.name ? this.state.name : ""}!</span></h2>
            <form className="form" onSubmit={this.handleSubmit}>
              <label for="form-name">Enter your name: </label>
              <input type="text" ref={this.textInput} name="form-name" className="input" />
              <button className="reset-button">Reset</button>

              <button onClick={this.IncreaseCount}>UP!</button>
              <button onClick={this.DecreaseCount}>DOWN!</button>
              <h4 className={this.state.colorClass}>{this.state.count} clicks!</h4>
            </form>

          </div>
        </main>
      </body>
    );
  }
}

export default Main;