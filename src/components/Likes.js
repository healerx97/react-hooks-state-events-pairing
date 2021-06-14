import React, { useState } from "react"

function Likes(props) {
    const [upVotes, setUpvotes] = useState(props.upVotes)
    const [downVotes, setDownvotes] = useState(props.downVotes)
    function handleUpvote() {
        setUpvotes(upVotes+1)
    }
    function handleDownvote() {
        setDownvotes(downVotes+1)
    }
    return (
        <>
        <button className= "likeButton" onClick={handleUpvote}>{upVotes} Likes 👍</button>
        <span></span>
        <button className= "likeButton" onClick={handleDownvote}>{downVotes} Dislikes 👎</button>
        </>
    )
}




export default Likes