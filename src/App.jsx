import Notification from "./components/Notification"
import Anecdotes from "./components/Anecdotes"
import NewAnecdote from "./components/NewAnecdote"
import Filter from "./components/Filter"

const App = () => {
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