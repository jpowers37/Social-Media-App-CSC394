import React from 'react'
import "./post.css"
import {MoreVert} from "@mui/icons-material"

export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="" alt="" className="postProfileImg" />
                    <span className="postUsername">John Doe</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    Demo first post by user
                </span>
                <img src="" alt="" className="postImg" />
            </div>
            <div className="postBotton">
                <div className="postBottomLeft">
                    <img src="" alt="" className="likeIcon" />
                    <img src="" alt="" className="heartIcon" />
                    <span className="postLikeCounter">20 people liked this</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">6 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
