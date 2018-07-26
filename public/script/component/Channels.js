import React from 'react';
import '../../style/data-tables.scss';

class Channels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: {}
    };
  }

  componentDidMount() {
    // TODO do I need a polyfill?
    fetch('api/public/channels', {headers: {'Accept': 'application/json'}})
    .then((response) => {
      return response.json();
    })
    .then((channelsJson) => {
      this.setState({channels: channelsJson})
    });
  }

  render() {
    let tableHeaders, rowData;

    // build up each table row
    const tableRows = Object.values(this.state.channels).map((channel) => {
      // build the table headers if they haven't been built yet
      if (!tableHeaders) {
        tableHeaders = Object.keys(channel).map((property) => {
          return (<th key={property}>{property}</th>);
        });
      }

      // build each cell in a row
      rowData = Object.values(channel).map((value, i) => {
        return (<td key={i}>{value}</td>);
      });

      return (<tr key={channel.ID}>{rowData}</tr>);
    });

    return (
      <table>
        <tbody>
          <tr>
            {tableHeaders}
          </tr>
          {tableRows}
        </tbody>
      </table>
    );
  }
}

export default Channels;
