import React, { Component } from 'react';

class EntryRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
        </tr>
    );
  }
}

export default EntryRow;
