import { useEffect } from "react"

import Notification from "./components/Notification"
import Anecdotes from "./components/Anecdotes"
import NewAnecdote from "./components/NewAnecdote"
import Filter from "./components/Filter"

import { initializeAnecdotes } from "./reducers/anecdoteReducer"
import { useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [])

  return(
    <div>
      <h1>Anecdotes</h1>
      <Notification />
      <NewAnecdote />
      <Filter/>
      <Anecdotes />
    </div>
  )
}

export default App