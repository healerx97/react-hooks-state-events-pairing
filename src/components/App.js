import video from "../data/video.js";
import Likes from "./Likes"
import Comments from "./Comments"
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <h4>{video.views} views | Uploaded: {video.createdAt}</h4>
      {<Likes upVotes = {video.upvotes} downVotes = {video.downvotes}/>}
      <br/>
      {<Comments comments = {video.comments}/>}
    </div>
    
  );
}

export default App;
