import { useState, useEffect } from "react";
import React from "react";
import Comments from "./Comments";
import LikeButton from "./LikeButton";
import AddComment from "./AddComment";
import axios from "axios";
import { AuthContext } from '../context/auth'
import { Link } from 'react-router-dom'
// import Icon from "./Icon"







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

    const storedToken = localStorage.getItem('authToken')


    // delete project

    const deleteProject = (id) => {
        console.log(id)
        axios.delete(`/posts/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(() => {
                setRefresh(!refresh)
            })
            .catch(err => console.log(err))
    }



    return (
        <div className='tweet'>

            {/* <div className='body'>

                <div className="top">
                    <h1>{name}</h1>
                </div>

                <h2>{text}</h2>

                <div className='actions'>
                    <button onClick={handleCommentState}>
                        <p>comments {commentsCount}</p>
                    </button>


                    <p> likes <LikeButton /> </p>
                    <Comments comments={comments} />

                    <button onClick={() => deleteProject(id)}>Delete tweet</button>

                    {showComments && (
                        <div>
                            {comments.map((comment) => {
                                return <p> {comment.text}</p>;
                            })}
                        </div>
                    )}

                    <p>{createdAt}</p>

                </div>

            </div> */}

            <div className='picture'>

            </div>

            <div className='content'>
                <div className='tweet-content'>
                    <div className='name'>
                        <h4>{name} <span>username </span></h4>


                        <div className='icon'>
                            <img src='/icons/more.svg' alt='More' />
                        </div>

                    </div>

                    <p>{text}</p>
                </div>

                <div className='actions'>
                    <div className='action-icon'>

                        <button onClick={handleCommentState} className='icon-button'> <img src='/icons/comment.svg' alt='Comment' /></button>
                        <p>Comments </p>
                        <Comments comments={comments} />
                        <AddComment postId={id} showComments={showComments} setShowComments={setShowComments} refresh={refresh} setRefresh={setRefresh}/>
                    </div>

                    {showComments && (
                        <div>
                            {comments.map((comment) => {
                                return <p> {comment.text}</p>;
                            })}
                        </div>
                    )}

                        <div className='action-icon'>
                            <span> <img src='/icons/repost.svg' alt='More' /></span>
                            <p>Retweet</p>
                        </div>

                        <div className='action-icon'>
                            <p>  <LikeButton /> </p>
                            <span>likes</span>

                        </div>


                        <div className='action-icon'>
                            <button onClick={() => deleteProject(id)} className='delete'><img src='/icons/trash.svg' alt='trash' />  </button>
                            <p>delete tweet</p>

                        </div>

                    </div>
                </div>
            </div>
            );
}

// display grid for content 
//grid template column 1fr 
// then input gap apx. 12px 
// same thing for tweet-content but smaller gap 
// for name: display flex, allign items center ,space bewteen 
// actions display grid 
// grid template column repeat 1fr (3, 1fr)
// then gap 
// action icon, display flex, align items center, justify ontent flex start 
// icon margin 4% 
