import React, { useContext } from 'react'
import { AppContext } from './UseContextHook'

const User = () => {
    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>Hello : {username}</h1>
        </div>
    )
}

export default User
