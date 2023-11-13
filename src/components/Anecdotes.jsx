import { useDispatch, useSelector } from 'react-redux'
import { handleVote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <li>
          {anecdote.content} {anecdote.votes} <button onClick={handleClick}>vote</button>
        </li>
      )
    }

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state)

  anecdotes.sort((a, b) => b.votes - a.votes)

  return(
    <ul>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => dispatch(handleVote(anecdote.id))}
        />
      )}
    </ul>
  )
}

export default Anecdotes