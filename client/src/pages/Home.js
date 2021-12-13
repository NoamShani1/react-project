import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


//import axios 
// axios requests to the routes in the backend 

//todo: 
//render each tweet  as a singular element 
// create a create new tweet button and a form with it 
// create a like button that adds counts to like 
// implement a comment button after each post 
// create a profile page to edit profiles 

// button that lends me to form so i can submit to backend 
// 



export default function Home() {


	const [tweets, setTweets] = useState([])

	const [refresh, setRefresh] = useState(false)

	const handle = () => {
		setRefresh(true)
	}

	useEffect(() => {

		axios.get('/posts')
			.then(response => {
				setTweets(response.data)
			})

	}, [refresh])



	const allTweets = tweets.map(tweet => {
		return (
			<>
				<h1>{tweet.user.name}</h1>
				<h2>{tweet.caption}</h2>
				<p> likes {tweet.likesCount}</p>
				<p>{tweet.retweets}</p>
				<p> retweets {tweet.retweetCount}</p>
				<p>{tweet.comments}</p>
				<p>comments {tweet.commentsCount}</p>
				<p>{tweet.createdAt}</p>
			</>
		)

	})






	// map through each element of the tweet 
	return (
		<div>
			<button onClick={handle}>Refresh</button>
			<h1>Your Feed</h1>
			{allTweets}
		</div>
	)
}


