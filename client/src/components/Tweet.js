import { useState, useEffect } from 'react'
import React from 'react'
import Comments from './Comments'

export default function Tweet({ name, text, likes, retweet, retweetCount, comments, commentsCount, createdAt }) {

    //change name 
    const [showComments, setShowComments] = useState(false)



    const handleCommentState = e => {



    }

    console.log('Comment', comments)
    return (

        <div>
            <h1>{name}</h1>
            <h2>{text}</h2>
            <p> likes {likes}</p>
            <p>{retweet}</p>
            <p> retweets {retweetCount}</p>

            <button onClick={handleCommentState}>
                <p>comments  {commentsCount}</p>
            </button>
            {/* insert button above  */}
            {/* if statement && show button true,  */}

            <Comments comments={comments} />

         
            <p>{createdAt}</p>
        </div>
    )

}
