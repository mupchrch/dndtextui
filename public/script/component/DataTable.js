import React from 'react';
import '../../style/DataTable.scss';

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataRows: []
    };
  }

  componentDidMount() {
    // TODO do I need a polyfill?
    // TODO create a wrapper for this (so I don't have to set headers, credentials, etc every time)
    fetch(this.props.location.pathname.replace('/data', 'api') + this.props.location.search, {
      credentials: 'same-origin',
      headers: {'Accept': 'application/json'}
    })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      if (!Array.isArray(responseJson)) {
        responseJson = [responseJson];
      }

      this.setState({dataRows: responseJson})
    });
  }

  buildRow(rowObj, key) {
    // build each cell in a row
    const rowData = Object.values(rowObj).map((value, valueIndex) => {
      return (<td key={valueIndex}>{value}</td>);
    });

    return (<tr key={key}>{rowData}</tr>);
  }

  render() {
    let tableHeaders;
    // build up each table row
    const tableRows = this.state.dataRows.map((dataRow, rowIndex) => {
      // build the table headers on the first pass
      if (!tableHeaders) {
        tableHeaders = Object.keys(dataRow).map((property, propertyIndex) => {
          return (<th key={propertyIndex}>{property}</th>);
        });
      }

      return this.buildRow(dataRow, rowIndex);
    });

    return (
      <table className="data-table">
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

export default DataTable;
