import React from 'react';
import Message from './Message';
import '../../style/MessageArea.scss';

class MessageArea extends React.Component {
  render() {
    const messages = this.props.messages.map((msgObj, index, array) => {
      const showUserInfo = (index === 0 || (index > 0 && array[index-1].CharacterID !== msgObj.CharacterID));

      return (
        <Message
          key={msgObj.ID}
          createdAt={msgObj.CreatedOn}
          userId={msgObj.CharacterID}
          showUserInfo={showUserInfo}
          message={msgObj.Content}
        />
      );
    });

    return (
      <div className="message-area">
        <ol className="message-list">{messages}</ol>
      </div>
    );
  }
}

export default MessageArea;
