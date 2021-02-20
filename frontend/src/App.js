import React, {Component} from "react";
import './App.css';
import EntryField from "./components/EntryField";
import SideBar from './components/SideBar.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        <EntryField />
        </header>
      </div>
    );
  }
}

export default App;
