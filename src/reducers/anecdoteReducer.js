import { createSlice } from '@reduxjs/toolkit'

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

const generateId = () => Number(( Math.random() * 1000000).toFixed(0) )

const anecdoteSlice = createSlice({
  name: 'anecdotes', 
  initialState,
  reducers: {
    createAnecdote ( state, action ) {
      const content = action.payload
      console.log(JSON.parse(JSON.stringify(state)))
      state.push({
        content,
        votes: 0,
        id: generateId(),
      })
    },
    handleVote : ( state, action ) => {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      anecdoteToChange.votes += 1

      state.map( anecdote => anecdote.id === id ? anecdoteToChange : anecdote )
    },
  }
})

export const { createAnecdote, handleVote } = anecdoteSlice.actions
export default anecdoteSlice.reducer