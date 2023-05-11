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
  e.preventDefault();
  const query = this.state.query;

  try {
    if (query && query.length > 1) {
      const [
        // trefleResponse, 
        plantResponse,
        flickrResponse
      ] = await Promise.all([
        // axios.get(`https://trefle.io/api/v1/plants/search?q=${query}&token=Wz0VAGrCf0FpjxIu3yzFrRtUpmIhIDWgo9gU3pUq1d4&`),
        axios.get(`https://perenual.com/api/species-care-guide-list?key=sk-wryE645bfa430d7fb874&species_id=1`),
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f41cb861ba40285afc46152b9fa3b4c&tags=${query}&per_page=24&format=json&nojsoncallback=1`),
      ]);

      // const trefleData = trefleResponse.data;
      const plantData = plantResponse.data;
      const flickrData = flickrResponse.data;

      this.setState({
        pics: flickrData.photos.photo.slice(0, 6),
        // plantData: trefleData,
        plantData: plantData
      });
      console.log(plantData);
    } else {
      this.setState({
        pics: [],
        plantData: null,
      });
    }
  } catch (error) {
    console.log('Error fetching and parsing data', error);
  }
};

 

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
          scientificName={this.state.plantData.data[1].scientific_name[0]}
          images={this.state.pics.slice(0, 6)} // Pass the first three images as a prop
          description={this.state.plantData.data[1].section[1].description}
          conservationStatus="least concern"
        />
      )}
    </>
   )
 }
}

export default Search
