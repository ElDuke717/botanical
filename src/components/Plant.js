import React, { Component } from 'react'

class Plant extends Component {

    render() {
        return (

        <div className="plant">
            <h2 className="common-name">Aloe Vera</h2>
            <h3 className="plant-scientific-name">Aloe vera</h3>
            <img className="plant-img" src="aloe_vera.jpg" alt="Aloe Vera"/>
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