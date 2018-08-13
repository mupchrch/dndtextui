import React from 'react';
import Ajax from '../ajax';
import MessageArea from './MessageArea';

class Channel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }
  componentDidMount() {
    Ajax.get(`api/channels/${this.props.id}/messages?msgType=story`)
      .then((messages) => {
        this.setState({messages: messages});
      });
  }

  render() {
    if (this.props.isVisible) {
      return (
        <MessageArea
          messages={this.state.messages}
        />
      );
    } else {
      return null;
    }
  }
}

export default Channel;
