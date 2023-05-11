import React, { Component } from 'react'

class Plant extends Component {
    render() {
        const { commonName, scientificName, images, description, conservationStatus } = this.props;
        return (

        <div className="plant">
            <h2 className="common-name">{commonName}</h2>
            <h3 className="plant-scientific-name">Aloe vera</h3>
            
          
            <div className='photo-container'>

                {/* Iterate over the first three images and render them */}
                {images && images.length > 0 && images.slice(0, 3).map((image, index) => (
                <img
                    key={index}
                    className="plant-img"
                    src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                    alt={commonName}
                />
                ))}

                {/* <img className="plant-img" src={photoUrl} alt="Aloe Vera"/> */}
            </div>
            
            <p className="plant-description">
                Aloe vera is a succulent plant species of the genus Aloe. It is widely used in the cosmetic, pharmaceutical, and food industries for its various beneficial properties. The plant is also popular as a houseplant and for its ability to remove toxins from the air.
            </p>
            <h4>Conservation status</h4>
            <p className="conservation-status">least concern</p>
        </div>
        )
    }
   
}

export default Plant