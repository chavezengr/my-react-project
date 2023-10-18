import React, { useEffect, useState } from 'react'
import './PublicWall.css'
import { Typography } from '@mui/material'

import {
  decrement,
  increment,
  incrementByAmount,
} from '../../../../../reducks/counter/slice'
import { addTodos } from '../../../../../reducks/todo/slice'
import { useAppDispatch, useAppSelector } from '../../../../../reducks/hooks'
import { getTodos } from '../../../../../reducks/todo/selectors'
import { counterSelectors } from '../../../../../reducks/counter'

import { counter } from '../../../../../reducks/index'

const PublicWall: React.FC = () => {
  const selector = useAppSelector((state) => state.counter)
  const count = counterSelectors.getCount(selector)

  const todoSelector = useAppSelector((state) => state.todo)
  const todos = getTodos(todoSelector)

  const dispatch = useAppDispatch()
  const [amount, newAmount] = useState(10)

  const handleDecreaseAmount = () => {
    newAmount((previousAmount) => previousAmount - 1)
  }

  const handleIncreasAmount = () => {
    newAmount((previousAmount) => previousAmount + 1)
  }

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByValue = () => {
    dispatch(incrementByAmount(amount))
  }

  const [myAnswer, setMyAnswer] = useState<string[]>([
    'Yes it is',
    "No it's not",
  ])

  const [isAwesome, setIsAwesome] = useState(true)

  const handleChangeMind = () => {
    setIsAwesome((previousMind) => !previousMind)
  }

  const handleChangeComment = () => {
    setMyAnswer((prevState) => {
      return [...prevState, (myAnswer[0] = 'its very awesome')]
    })
  }

  const [todo, setTodo] = useState('')

  const updateInput = (input: string) => {
    setTodo(input)
  }

  const handleAddTodo = () => {
    if (todo != '') {
      dispatch(addTodos(todo))
    } else {
      // Error Message Here
    }
  }

  useEffect(() => {})

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <button aria-label="ChangeComment" onClick={handleChangeComment}>
        Change my first comment to very awesome
      </button>
      <button aria-label="My mind" onClick={handleChangeMind}>
        Change my mind!
      </button>
      Public Wall is awesome? {isAwesome ? myAnswer[0] : myAnswer[1]}
      {myAnswer[3]}
      <div>
        <button aria-label="Increment value" onClick={handleIncrement}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={handleDecrement}>
          Decrement
        </button>
        <button
          aria-label="Increment value 10"
          onClick={handleIncrementByValue}
        >
          Add {amount}
        </button>

        <button
          aria-label="Change increment value"
          onClick={handleIncreasAmount}
        >
          Increase 1 to increment value
        </button>

        <button
          aria-label="Change increment value"
          onClick={handleDecreaseAmount}
        >
          Decrease 1 to increment value
        </button>
      </div>
      <p></p>
      <p className="secret">Secret</p>
      <p className="secret3">Secret 3</p>
      <div id="example">example</div>
      <Typography>Material UI</Typography>
      <br />
      <p className="secret2">paragraph Secret 2</p>
      <br />
      <br />
      <button className="subscribe-btn">SUBSCRIBE</button>
      <button className="join-btn">JOIN</button>
      <button className="tweet-btn">Tweet</button>
      <br />
      <br />
      <div className="outer">
        <div>Inner div.</div>
      </div>
      <div>
        <input onChange={(e) => updateInput(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.name.map((todo: string, id: number) => {
          return <li> {todo} </li>
        })}
      </ul>
    </div>
  )
}

export default PublicWall
