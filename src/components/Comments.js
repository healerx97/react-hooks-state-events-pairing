import React, { useState } from "react"
import Likes from "./Likes"
function Comments(props) {
    const [comments, setComments] = useState(false)
    function handleComments() {
        setComments(!comments)
    }
    const commentSection = props.comments.map(comment=> {
        return (
            <div className = "comment-box">
                <h3>{comment.user}</h3>
                <h5>{comment.comment}</h5>
                {<Likes upVotes={0} downVotes={0}/>}
            </div>
        )
    })
    return(
        <div>
            <button onClick={handleComments} className="commentButton">{comments? "Show " : "Hide "}Comments</button>
            <br/>
            <div className = {comments? "hide" : ""} id ="dashed">
                <h2>{props.comments.length} Comments</h2>
                {commentSection}
            </div>
        </div>
    ) 
}




export default Comments