import { useState, useEffect } from "react";
import React from "react";
import Comments from "./Comments";
import LikeButton from "./LikeButton";
import axios from "axios";







export default function Tweet({
    id,
    name,
    text,
    likes,
    retweet,
    retweetCount,
    comments,
    commentsCount,
    createdAt,
    refresh,
    setRefresh,
}) {


    //change name
    const [showComments, setShowComments] = useState(false);

    const handleCommentState = (e) => {
        setShowComments(!showComments);
    };

 

    // delete project

    const deleteProject = (id) => {
        console.log(id)
        axios.delete(`/posts/${id}`)
            .then(() => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <h1>{name}</h1>
            <h2>{text}</h2>
            {/* <p> likes {likes}</p> */}
            <p> likes <LikeButton /> </p>
            <p>{retweet}</p>
            <p> retweets {retweetCount}</p>
            <button onClick={handleCommentState}>
                <p>comments {commentsCount}</p>
            </button>

            <Comments comments={comments} />

            {showComments && (
                <div>
                    {comments.map((comment) => {
                        return <p> {comment.text}</p>;
                    })}
                </div>
            )}

            <p>{createdAt}</p>

            <button onClick={()=> deleteProject(id)}>Delete this project</button>
        </div>
    );
}
