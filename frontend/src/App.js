import React, {Component} from "react";
import { connect } from 'react-redux';

import './App.css';
import EntryField from "./containers/EntryField";
import SideBar from './components/SideBar'
import History from './containers/History'

import { getAllEntities } from './actions/entities'


class App extends Component {

  componentDidMount() {
    console.log('App mounted, fetching all entities.')
    this.props.getAllEntities()
 }

  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="App-header">
          <History />
          <EntryField />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
     allEntities: state.commands.allEntities
  }
}

export default connect(mapStateToProps, { getAllEntities })(App)
