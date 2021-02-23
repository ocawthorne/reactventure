import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Inventory extends React.Component {

   render() {
      return (
         <div>
            <p>Inventory</p>
            <table>
               <tbody>
                  <tr>
                     <td key="item_1">{this.props.userObjects[0]}</td>
                     <td key="item_2">{this.props.userObjects[1]}</td>
                     <td key="item_3">{this.props.userObjects[2]}</td>
                  </tr>
                  <tr>
                     <td key="item_4">{this.props.userObjects[3]}</td>
                     <td key="item_5">{this.props.userObjects[4]}</td>
                     <td key="item_6">{this.props.userObjects[5]}</td>
                  </tr>
                  <tr>
                     <td key="item_7">{this.props.userObjects[6]}</td>
                     <td key="item_8">{this.props.userObjects[7]}</td>
                     <td key="item_9">{this.props.userObjects[8]}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      userObjects: state.commands.userObjects
   }
}

export default connect(mapStateToProps)(Inventory)
