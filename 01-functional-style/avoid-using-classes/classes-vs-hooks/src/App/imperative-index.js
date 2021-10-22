import React from 'react';

class ImperativeShowCount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p> Count: {this.state.count} </p>
        <button onClick={() => this.increase()}>+</button>
      </div>
    );
  }
}

export default ImperativeShowCount;
