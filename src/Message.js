import React from 'react'
import './Message.css'
import { Avatar } from '@material-ui/core'

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          Stepan
          <span className="message_timestamp">this is a timestamp</span>
        </h4>

        <p>This is a message</p>
      </div>
    </div>
  )
}

export default Message
