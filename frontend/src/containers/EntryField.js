
// // import { executeCommand } from '../actions/commands'

// class EntryField extends Component {

//    handleChange = (event) => {
//       const command = event.target.value
//       const currentCommand = Object.assign({}, this.props.command, {
//          command: command
//       })

//       this.props.updateEntryField(currentCommand)
//    }

//    handleSubmit = (event) => {
//       event.preventDefault()
//       this.props.submitEntryField()
//       debugger
//    }

//    render() {
//       return (
//          <form onSubmit={this.handleSubmit} className="entry-form">
//             <input type="text" onChange={this.handleChange} value={this.props.command} className="entry text" />
//             <input type="submit" value="Develop the plot..." className="entry submit" />
//          </form>
//       )
//    }
// }

// const mapStateToProps = state => {
//    return {
//      command: state.command
//    }
// }

// // const mapDispatchToProps = dispatch => {
// //    return {
// //       commandWithinDispatch: () => dispatch(submitEntryField()),
// //       updateEntryField: () => dispatch(updateEntryField())
// //    }
// // }

// export default connect(mapStateToProps, { submitEntryField, updateEntryField })(EntryField);




import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitEntryField, updateEntryField } from '../actions/entryField'

class EntryField extends Component {

   handleChange = (event) => {
      const currentCommand = event.target.value.toLowerCase()
      this.props.updateEntryField(currentCommand)
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.submitEntryField(this.props.command)
   }

   render() {
      console.log(this.props)
      return (
         <form onSubmit={this.handleSubmit} className="entry-form">
            <input type="text" onChange={this.handleChange} value={this.props.command} className="entry text" />
            <input type="submit" value="Develop the plot..." className="entry submit" />
         </form>
      )
   }
}

const mapStateToProps = state => {
   return {
      currentUser: state.currentUser,
      userObjects: state.knownObjects,
      knownObjects: state.knownObjects,
      userHistory: state.userHistory,
      command: state.command
   }
}

export default connect(mapStateToProps, { updateEntryField, submitEntryField })(EntryField);
