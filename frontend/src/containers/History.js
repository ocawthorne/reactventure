import React, {Component} from "react"
import { connect } from 'react-redux';
import { commitHistoryToUser } from '../actions/users'

class History extends Component {

   componentDidUpdate() {
      console.log('History updated.')
      commitHistoryToUser(this.props.userHistory)
      debugger
   }

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
      userHistory: state.commands.userHistory,
   }
}

export default connect(mapStateToProps, { commitHistoryToUser })(History)
