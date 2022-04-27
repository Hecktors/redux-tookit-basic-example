import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter'

import classes from './Counter.module.css'

const Counter = () => {
  const dispatch = useDispatch()
  const { counter, isDisplayed } = useSelector((state) => state.counter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{isDisplayed && counter}</div>
      <div>
        <button onClick={decrementHandler}>- Decrement</button>
        <button onClick={increaseHandler}>Add 5</button>
        <button onClick={incrementHandler}>+ Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
