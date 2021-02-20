import React, {Component} from 'react'

export default class EntryField extends Component {

   state = {
      input: '',
      command_type: '', //? This will be either GET, USE, COMBINE.
      entity_1: '',
      entity_2: '' //? Only referenced when two objects are called in one command
   }

   handleChange = (event) => {
      //! DO LATER
   }

   render() {
      return (
         <form className="entry-form">
            <input type="text" className="entry text" />
            <input type="submit" value="Develop the plot..." className="entry submit" />
         </form>
      )
   }
}
