import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { AuthContext } from '../context/auth'



// button that lends me to form so i can submit to backend 
// add form with it 



export default function NewTweet() {

const  [newTweet, setNewTweet] = useState('')
const [errorMessage, setErrorMessage] = useState(undefined)

const { loginUser } = useContext(AuthContext)

const handleTweet = e => setNewTweet(e.target.value)




const handleSubmit = e => {
    e.preventDefault()
    // axios.post('/addTwiada')
    const requestBody = { newTweet }
console.log(requestBody)

const storedToken = localStorage.getItem('authToken')
console.log('hjejejejj',storedToken)

    axios.post('/posts/new', { headers: { Authorization: `Bearer ${storedToken}` }}, requestBody)
        .then(response => {
            // redirect -> projects
            // navigate('/login')
        
            loginUser()
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
