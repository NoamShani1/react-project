// todo: 
//jeder tweet hat einen state 'show comment'
// false als default value, wenn button gedrückt wird -> true 
// if statement , button clicked - show comments true - comments kompente gerendert 

import React from 'react'
import Tweet from './Tweet'

export default function Comments({ comments }) {


    return (
        <div>
            {comments.map(comment => {
                <h1> {comment.text}</h1>
            })}
        </div>
    )
}
