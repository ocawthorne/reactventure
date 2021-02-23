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
      this.props.submitEntryField(this.props.command.trim())
      this.props.updateEntryField('')
   }

   render() {
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
      currentUser: state.commands.currentUser,
      userObjects: state.commands.userObjects,
      knownObjects: state.commands.knownObjects,
      userHistory: state.commands.userHistory,
      command: state.commands.command
   }
}

export default connect(mapStateToProps, { updateEntryField, submitEntryField })(EntryField);
