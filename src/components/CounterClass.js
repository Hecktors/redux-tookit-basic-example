import React from 'react'
import { connect } from 'react-redux'

import classes from './Counter.module.css'

class Counter extends React.Component {
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </div>
        <button onClick={this.props.toggleCounter}>Toggle Counter</button>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'increment' }),
  decrement: () => dispatch({ type: 'decrement' }),
  toggleCounter: () => dispatch({ type: 'toggle' }),
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
