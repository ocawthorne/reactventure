import React from 'react';
import '../App.css';

export default class Inventory extends React.Component {
   render() {
      return (
         <div>
            <p>Inventory</p>
            <table>
               <tbody>
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
               </tbody>
            </table>
         </div>
      )
   }
}
