import { createSlice } from '@reduxjs/toolkit'
import Notification from '../components/Notification'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        notificationMessage( state, action ) {
            return state = action.payload
        },
        clearNotification( state, action ) {
            return state = ''
        }
    }
})

export const { notificationMessage, clearNotification } = notificationSlice.actions

export const setNotification = message => {
    return async dispatch => {
        dispatch( notificationMessage(message) )
        setTimeout(() => {
            dispatch( clearNotification() )
        })
    }
}

export default notificationSlice.reducer