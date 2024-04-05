import React from 'react'
import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="" alt="" />
                <input placeholder='Share a Post' className="shareInput" />
            </div>
            <hr className='shareHr'/>
            <div className="shareBotton">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia className='shareIcon'/>
                        <span className='shareOptionText'>Photo/Video</span>
                    </div>
                    <div className="shareOption">
                        <Label className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions className='shareIcon'/>
                        <span className='shareOptionText'>Feeling</span>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    </div>
  )
}
