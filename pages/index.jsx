/* eslint-disable no-useless-constructor */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';

class App extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.incrementCounter} type="button">Increment</button>
        <button onClick={this.props.decrementCounter} type="button">Decrement</button>
        <h1>{this.props.counter}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
