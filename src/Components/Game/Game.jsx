import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Game = () => {
    const dispatch = useDispatch();
    const {count} = useSelector((state) => state);

      const onIncrement = () =>  dispatch({ type: 'CHANGE_COUNT', payload:!count + Math.floor(Math.random() * 51) });
      const onDecrement = () =>  dispatch({ type: 'CHANGE_COUNT', payload:!count - Math.floor(Math.random() * 51) });
  return (
    <div>
        <button onClick={onIncrement}>+RND</button>
        <button onClick={onDecrement}>+RND</button>
        <h2>{count}</h2>
       
    </div>
  )
}

export default Game