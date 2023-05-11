import React, { Component } from 'react';
import Plant from './Plant.js';
import axios from 'axios';


class Search extends Component {
 state = {
  // query is the value from our search input, it is an empty string by default
   query: '',
  // results is an empty array by default, it will hold the data from the request to the API
   pics: []
 }

// handleInputChange will be triggered on every key stroke, it updates the state with the value from the input
 handleInputChange = (e) => {
  // console.log('e.target.value', e.target.value);
  this.setState({
    // e.target.value is the value from the input, it is a string set to query in state
    query: e.target.value
  })
};

handleSubmit = async (e) => {
  console.log('submit button clicked');
  e.preventDefault();
  console.log('this.state.query in handleSubmit', this.state.query);

  try {
    if (this.state.query && this.state.query.length > 1) {
      const pics = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f41cb861ba40285afc46152b9fa3b4c&tags=${this.state.query}&per_page=24&format=json&nojsoncallback=1`, 
        );
      // console.log('data after axios call', pics.data);
      // console.log('pics after call', pics.data.photos.photo[0])
      this.setState({
        // use slice to limit the amount of photos
        pics: pics.data.photos.photo.slice(0,6)
      });
      console.log('this.state.pics after the call', this.state.pics)
      console.log('the first picture owner in state', this.state.pics[0].owner)
    } else {
      this.setState({
        pics: []
      });
    }
  } catch (error) {
    console.log('Error fetching and parsing data', error);
  }
}

 

 render() {

   return (
    <>
    <div className="search-container">
     <form className='search-form' onSubmit={this.handleSubmit}>
       <input
         className='search-input'
         placeholder="Add common or scientific name..."
         ref={input => this.search = input}
         onChange={this.handleInputChange}
       />
       <button className="submit-button" type="submit">Start Search</button>
     </form>
    </div>
      {this.state.pics && this.state.pics.length > 0 && (
        <Plant
          commonName={this.state.query}
          scientificName="Aloe vera"
          images={this.state.pics.slice(0, 6)} // Pass the first three images as a prop
          // photoUrl={`https://farm${this.state.pics[0].farm}.staticflickr.com/${this.state.pics[0].server}/${this.state.pics[0].id}_${this.state.pics[0].secret}.jpg`}
          description="Aloe vera is a succulent plant species of the genus Aloe. It is widely used in the cosmetic, pharmaceutical, and food industries for its various beneficial properties. The plant is also popular as a houseplant and for its ability to remove toxins from the air."
          conservationStatus="least concern"
        />
      )}
    </>
   )
 }
}

export default Search
