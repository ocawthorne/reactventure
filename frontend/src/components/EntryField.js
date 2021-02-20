import React, {Component} from 'react'

export default class EntryField extends Component {

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
