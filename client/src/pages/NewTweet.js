import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useContext } from 'react'
import { AuthContext } from '../context/auth'


// button that lends me to form so i can submit to backend 
// add form with it 



export default function NewTweet() {

    const [newTweet, setNewTweet] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined)
    const navigate = useNavigate()


    const handleTweet = e => setNewTweet(e.target.value)

    const { user } = useContext(AuthContext)
    console.log(user)

    const handleSubmit = e => {
        e.preventDefault()
        // axios.post('/addTwiada')
        const requestBody = { text: newTweet, user: user._id }

        const storedToken = localStorage.getItem('authToken')

        axios.post('/posts/new', requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(response => {
                // redirect -> projects
                navigate('/')
            })
            .catch(err => {
                const errorDescrition = err.response.data.message
                setErrorMessage(errorDescrition)
            })
    }





    return (

        <div>
            <h1>Create tweet</h1>
            <form onSubmit={handleSubmit}>
                <label>Whats new?  </label>
                <input type="text" name="text" value={newTweet} onChange={handleTweet} />
                <button type="submit"> Post </button>
            </form>

        </div>
    )
}
