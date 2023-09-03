import React, { Component } from "react";

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="MessageLog">
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }
  renderMessage(message) {
    const { member, data, id } = message;
    const { currentMember } = this.props;
    const { username, color } = member.clientData;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li key={id} className={className}>
        {/* <span className="avatar" style={{ backgroundColor: color }} /> */}
        <div className="Message-content">
          <div className="username">{username}</div>
          <div className="text" style={{ backgroundColor: color }}>
            {data}
          </div>
        </div>
      </li>
    );
  }
}

export default Messages;
