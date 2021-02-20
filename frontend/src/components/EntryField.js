import React, {Component} from 'react'

export default class EntryField extends Component {

   handleChange = (event) => {
      //! DO LATER
   }

   render() {
      return (
         <form class="entry-form">
            <input type="text" class="entry text" />
            <input type="submit" value="Develop the plot..." class="entry submit" />
         </form>
      )
   }
}
