import React, { Component } from 'react'

class Search extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
    <div className="search-container">
     <form>
       <p className="search-text">Add common or scientific name: </p>
       <input
         className='search-input'
         placeholder="Search plants..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <p>{this.state.query}</p>
     </form>
    </div>
   )
 }
}

export default Search
