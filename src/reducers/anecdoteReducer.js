const initialState = [
  {
    content: 'reducer defines how redux store works',
    votes: 3,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    votes: 1,
    id: 2,
  },
]

const anecdoteReducer = (state = /* [] */initialState, action) => {
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.payload]
    case 'HANDLE_VOTE':
      const id = action.payload.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes += 1
      }
      console.log(changedAnecdote)
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    default:
      return state
    }
  } 

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content,
      votes: 0,
      id: generateId()
    }
  }
}

export const handleVote = (id) => {
  console.log(id)

  return {
    type: 'HANDLE_VOTE',
    payload: { id }
  }
}  

export default anecdoteReducer