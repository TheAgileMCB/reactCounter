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
      this.handleChange = this.handleChange.bind(this);
      this.handleChange = this.handleSubmit.bind(this);

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

  handleChange(event) {
    var value = event.target.value;
    this.setState({ value });
  }

  handleSubmit(event){
    event.preventDefault();
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

    if (count < 0){
      colorClass = "negative";
      this.setState({ colorClass});
    }

    if (count === 0){
      colorClass = "zero";
      this.setState({ colorClass});
    }

    if (count > 0){
      colorClass = "positive";
      this.setState({ colorClass});
    }
  }
  
    render() {
      return (
        <div className="wrapper">
          <h2>Counting, baby!</h2>
          <h3>Words: {this.state.words}</h3>
          <input onChange={this.handleWord} />
          <button onClick ={this.handlClick}>Count!</button>
        </div>
      );
    }
  }
  
  export default Main;