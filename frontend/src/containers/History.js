import React, {Component} from "react"
import { connect } from 'react-redux';

class History extends Component {

   render() {
      return (
         <div className="history">
            {this.props.userHistory.map(u => 
               u.split("\n").map(h => <p>{h}</p>)
            )}
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      userHistory: state.userHistory,
   }
}

export default connect(mapStateToProps)(History)
