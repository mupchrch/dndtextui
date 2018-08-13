import React from 'react';
import Ajax from '../ajax';
import '../../style/DataTable.scss';

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataRows: []
    };
  }

  componentDidMount() {
    const queryString = this.props.location.pathname.replace('/data', 'api') + this.props.location.search;

    Ajax.get(queryString)
      .then((json) => {
        if (!Array.isArray(responseJson)) {
          json = [json];
        }

        this.setState({dataRows: json});
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
