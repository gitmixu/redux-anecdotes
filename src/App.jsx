import Anecdotes from "./components/Anecdotes"
import NewAnecdote from "./components/NewAnecdote"

const App = () => {
  return(
    <div>
      <h1>Anecdotes</h1>
      <NewAnecdote />
      <Anecdotes />
    </div>
  )
}

export default App