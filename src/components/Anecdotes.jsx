import { useDispatch, useSelector } from 'react-redux'
import { handleVote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <li>
          { anecdote.content } { anecdote.votes }<button onClick={ handleClick }>vote</button>
        </li>
      )
    }

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if ( filter === '' ) { return anecdotes }
    return anecdotes.filter(( anecdote ) => anecdote.content.includes(filter))
  });

  console.log( Object.isFrozen(anecdotes) );

  /* A frozen object can no longer be changed but copy */
  let checkedAnecdotes =  [ ...anecdotes ]
  checkedAnecdotes.sort((a, b) => b.votes - a.votes)

  return(
    <ul>
      {checkedAnecdotes.map(anecdote =>
        <Anecdote
          key={ anecdote.id }
          anecdote={ anecdote }
          handleClick={ () => dispatch(handleVote( anecdote.id )) }
        />
      )}
    </ul>
  )
}

export default Anecdotes