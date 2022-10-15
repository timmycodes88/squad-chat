import React, { useReducer } from 'react'
import { UserContext } from './UserContext'
import { userReducer } from './userReducer'

const initialState = {
    profile: {},
    groups: []
}

export default function UserState({ children }) {

    const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <UserContext.Provider value={{...state, dispatch}}>
        {children}
    </UserContext.Provider>
  )
}
