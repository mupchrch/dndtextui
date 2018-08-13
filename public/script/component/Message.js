import React from 'react';
import Timestamp from './Timestamp';
import '../../style/Message.scss';

class Message extends React.Component {
  render() {
    let gutterContent, messageHeader;

    if (this.props.showUserInfo) {
      gutterContent = (
        <div className="user-icon"></div>
      );
      messageHeader = (
        <div className="message-header">
          <b>{this.props.userId}</b>
          <Timestamp createdAt={this.props.createdAt} />
        </div>
      );
    } else {
      gutterContent = (
        <Timestamp createdAt={this.props.createdAt} />
      );
    }

    return (
      <li className="message">
        <div className="message-gutter">{gutterContent}</div>
        <div className="message-main">
          {messageHeader}
          <div className="message-content">
            {this.props.message}
          </div>
        </div>
      </li>
    );
  }
}

export default Message;
