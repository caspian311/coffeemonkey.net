import "../css/chat-messages.css";

import React, { Component } from "react";

class ChatMessages extends Component {
  render() {
    const { chatMessages } = this.props;
    return (
      <div className="chat-messages">
        {chatMessages.map(message => {
          return (
            <div className="message" key={message.id}>
              <span className="message-body">{message.message}</span>
              <span className="message-author">
                by {message.user.firstName} {message.user.lastName}
                &nbsp;on {message.createdAt}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChatMessages;
