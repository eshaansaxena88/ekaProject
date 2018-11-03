import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class Datatable extends Component{
  constructor(props){
    super(props);
    this.state={
contacts:this.props.contacts
    }
  }
    
  render(){
      
      return(
          <BootstrapTable data={this.state.contacts} striped hover>
      <TableHeaderColumn isKey dataField='id'>Contact ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='place'>Place</TableHeaderColumn>
      <TableHeaderColumn dataField='number'>Number</TableHeaderColumn>
      
  </BootstrapTable>
      )
  }
}

export default Datatable;