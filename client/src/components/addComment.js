import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { useContext } from 'react'
import { AuthContext } from '../context/auth'


export default function AddComment() {

    const [newComment, setNewComment] = useState('')
    const [errorMessage, setErrorMessage] = useState(undefined)
    const navigate = useNavigate()


    const handleComment = e => setNewComment(e.target.value)


    const { user } = useContext(AuthContext)
    console.log(user)

    const handleSubmit = e => {
        e.preventDefault()
        // axios.post('/addTwiada')
        const requestBody = { text: newComment, user: user._id }

        const storedToken = localStorage.getItem('authToken')

        axios.post('/posts/newcomment', requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
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

            <form onSubmit={handleSubmit}>
                <input type="text" name="text" value={newComment} onChange={handleComment} />
                <button type="submit"> comment </button>
            </form>

        </div>
    )
}

