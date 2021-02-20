import React, {Component} from 'react'
import { connect } from 'react-redux';
import { updateEntryField, resetEntryField } from '../actions/updateEntryField'

class EntryField extends Component {

   state = {
      input: '',
      command_type: '', //? This will be either GET, USE, COMBINE.
      entity_1: '',
      entity_2: '' //? Only referenced when two objects are called in one command
   }

   handleChange = (event) => {
      const command = event.target.value
      const currentCommand = Object.assign({}, this.props.command, {
         command: command.toLowerCase()
      })

      this.props.updateEntryField(currentCommand)
      console.log(currentCommand)
   }

   handleSubmit = (event) => {
      event.preventDefault()
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit} className="entry-form">
            <input type="text" onChange={this.handleChange} className="entry text" />
            <input type="submit" value="Develop the plot..." className="entry submit" />
         </form>
      )
   }
}

const mapStateToProps = state => {
   return {
     command: state.command,
   }
 }

export default connect(mapStateToProps, { updateEntryField, resetEntryField })(EntryField);
