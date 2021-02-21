import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitEntryField, updateEntryField } from '../actions/entryField'
// import { executeCommand } from '../actions/commands'

class EntryField extends Component {

   handleChange = (event) => {
      const command = event.target.value
      const currentCommand = Object.assign({}, this.props.command, {
         command: command
      })

      this.props.updateEntryField(currentCommand)
   }

   handleSubmit = (event) => {
      event.preventDefault()
      this.props.commandWithinDispatch()
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
     command: state.command
   }
}

const mapDispatchToProps = dispatch => {
   return {
      commandWithinDispatch: () => dispatch(submitEntryField()),
      updateEntryField: () => dispatch(updateEntryField())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryField);
