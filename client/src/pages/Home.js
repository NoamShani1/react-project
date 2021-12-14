import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Tweet from '../components/Tweet'


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




	
	useEffect(() => {
	const storedToken = localStorage.getItem('authToken')
	console.log('hellop!!', storedToken)
	

		axios.get('/posts', { headers: { Authorization: `Bearer ${storedToken}` }})
			.then(response => {
				console.log(response.data)
				setTweets(response.data)
			})

	}, [])



	const allTweets = tweets.map(tweet => {
		return (
			<div>
			
				<Tweet name= {tweet.user.name}
				 text= {tweet.text} 
				 likes= {tweet.likesCount} 
				 retweet= {tweet.retweets}
				 retweetCount = {tweet.retweetCount}
				 comments = {tweet.comments}
				 commentsCount = {tweet.commentsCount}
				 createdAt = {tweet.createdAt}
				 />

			</div>
		)

	})






	// map through each element of the tweet 
	return (
		<div>
		
			<h1>Your Feed</h1>
			{allTweets}
		</div>
	)
}


