import React from 'react';
import '../../style/ChannelList.scss';

class ChannelList extends React.Component {
  render() {
    const channelListMarkup = this.props.channels.map((channel) => {
      const isSelected = (this.props.selectedChannelId === channel.ID);

      return (
        <li
          key={channel.ID}
          className={isSelected ? 'selected-channel' : ''}
          onClick={() => this.props.onSelectChannel(channel.ID)}>
          {channel.Name}
        </li>
      );
    });

    return (
      <div className="channel-list">
        <h2>
          Channels
        </h2>
        <ul>{channelListMarkup}</ul>
      </div>
    );
  }
}

export default ChannelList;
