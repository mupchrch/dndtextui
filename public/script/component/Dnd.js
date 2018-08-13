import React from 'react';
import ChannelList from './ChannelList';
import Ajax from '../ajax';
import '../../style/Dnd.scss';

class Dnd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [],
      selectedChannelId: null
    };
  }

  componentDidMount() {
    Ajax.get('api/channels')
      .then((channels) => {
        this.setState({channels: channels});
      });
  }

  /**
   * Called when user selects a channel in the ChannelList.
   * @param  {String} selectedChannelId The ID of the selected channel.
   */
  onSelectChannel(selectedChannelId) {
    this.setState({
      selectedChannelId: selectedChannelId
    });
  }

  render() {
    // don't display anything if we don't have our list of users yet
    /*if (Object.keys(this.state.users).length === 0) {
      return (<div className="chat-container"></div>);
    }*/

    return (
      <div className="dnd-container">
        <div className="left-bar">
          <ChannelList
            channels={this.state.channels}
            onSelectChannel={this.onSelectChannel.bind(this)}
          />
        </div>
        <div className="main-area">
          selected channel: {this.state.selectedChannelId}
        </div>
      </div>
    );
  }
}

export default Dnd;
