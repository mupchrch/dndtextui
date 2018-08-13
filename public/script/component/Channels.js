import React from 'react';
import Channel from './Channel';

class Channels extends React.Component {
  render() {
    const channels = this.props.channels.map((channel) => {
      return (
        <Channel
          key={channel.ID}
          id={channel.ID}
          isVisible={this.props.selectedChannelId === channel.ID}
        />
      );
    });

    return (
      <div>
        {channels}
      </div>
    );
  }
}

export default Channels;
