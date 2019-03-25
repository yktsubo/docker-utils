import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import EntryRow from './EntryRow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: ''};
  }
  componentDidMount(){
    axios.get('http://10.16.194.7:3000/api/tasks')
    .then(response => {
      this.setState({ todos: response.data });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  entryRow(){
    if(this.state.todos instanceof Array){
      console.log('aaa');
      return this.state.todos.map(function(object, i){
          return <EntryRow obj={object} key={i} />;
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.entryRow()}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default App;

