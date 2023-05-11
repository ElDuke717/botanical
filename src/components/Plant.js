import React, { Component } from 'react'

class Plant extends Component {
    render() {
        const { commonName, scientificName, images, description, conservationStatus } = this.props;
        return (

        <div className="plant">
            <h2 className="common-name">{commonName}</h2>
            <h3 className="plant-scientific-name">{scientificName}</h3>
            
          
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
                {description}
            </p>
            <h4>Conservation status</h4>
            <p className="conservation-status">least concern</p>
        </div>
        )
    }
   
}

export default Plant