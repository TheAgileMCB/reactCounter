import React from 'react';

class Main extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        clicks: 0,
      };
    }
  
    // event handler is a class prop
    handleWord = e => {
      let words = e.target.value;
      this.setState({ words });
      console.log('__STATE__', this.state);
    }
  
  handleClick = e => {
    e.preventDefault();
    let words = this.state.words.split(' ').reverse().join(' ');
  
    this.setState({ words });
  }
  
    render() {
      console.log('Rendering!', this.state)
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