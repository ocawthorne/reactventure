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
                     <td>{this.props.userObjects[0]}</td>
                     <td>{this.props.userObjects[1]}</td>
                     <td>{this.props.userObjects[2]}</td>
                  </tr>
                  <tr>
                     <td>{this.props.userObjects[3]}</td>
                     <td>{this.props.userObjects[4]}</td>
                     <td>{this.props.userObjects[5]}</td>
                  </tr>
                  <tr>
                     <td>{this.props.userObjects[6]}</td>
                     <td>{this.props.userObjects[7]}</td>
                     <td>{this.props.userObjects[8]}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      userObjects: state.userObjects,
   }
}

export default connect(mapStateToProps)(Inventory)
