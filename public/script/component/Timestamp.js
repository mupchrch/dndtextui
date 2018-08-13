import React from 'react';

class Timestamp extends React.Component {
  render() {
    const date = new Date(this.props.createdAt);
    const shortTime = date.toLocaleTimeString([], {
      hour: 'numeric', minute: '2-digit'
    });
    const longTime = date.toLocaleString([], {
      month: 'short', day: 'numeric', hour: 'numeric', minute:'2-digit', second: '2-digit'
    });

    return (
      <span className="timestamp" title={longTime}>{shortTime}</span>
    );
  }
}

export default Timestamp;
