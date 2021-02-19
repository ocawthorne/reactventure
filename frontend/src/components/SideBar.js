import React from 'react';
import logo from '../logo.svg';

// import { Link } from 'react-router-dom'
import '../App.css';

class SideBar extends React.Component {
   render() {
      return (
         <div className="sidebar">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Inventory</p>
          <table>
             <tr>
                <td>Crowbar</td>
                <td>Candle</td>
                <td></td>
             </tr>
             <tr>
                <td></td>
                <td></td>
                <td></td>
             </tr>
             <tr>
                <td></td>
                <td></td>
                <td></td>
             </tr>
          </table>
         </div>
      )
   }
}

export default SideBar
