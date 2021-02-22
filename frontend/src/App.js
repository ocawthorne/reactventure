import React, {Component} from "react";
import './App.css';
import EntryField from "./containers/EntryField";
import SideBar from './components/SideBar'
import History from './containers/History'


class App extends Component {
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

export default App;
