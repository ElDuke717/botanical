import React from "react";
import ReactDOM from "react-dom";
import "../css/styles.css";
import bcLeavesWhite from '../../assets/bc_leaves_white.png';
import bcLeavesWhite2 from '../../assets/bc_leaves_white2.png'
import bcLeafGreen1 from '../../assets/bc_leaf1.png';
import bcLeafGreen2 from '../../assets/bc_leaf3.png';
import logo from '../../assets/bc_logo_grey.png'; 
import Search from './Searchform.js';
import Plant from './Plant.js';

const App = () => (
<>
    <header>
        <img className="header-img" src={bcLeavesWhite} alt="leaves" />
        <h1 className="main-title">The Botanical Compendium</h1>
        <img className="header-img" src={bcLeavesWhite2} alt="leaves" />
    </header>

    <h2 className="site-sub-title">
        Welcome to Kingdom Plantae
    </h2>

    <div className="desc-logo-container">
        <div className="site-description">
        <img className="header-img" src={bcLeafGreen1} alt="leaves" />
            <p className="discover">Discover new plants, learn about their characteristics and how to care for them.</p>
        <img className="header-img" src={bcLeafGreen2} alt="leaves" />
        </div>
    </div>

  
    <main>
      {/* Here the Search component is added to the App component */}
    <Search />
   
    </main>
    <div className="support">
        <p className="support-text">The Botanical Compendium exists as a resource for all. </p>
        <p className="support-text">Please consider supporting the Botanical Compendium.</p>
        <hr className="support-hr"/>
        <p>All humanity depends on Photosynthesis.</p>
    </div>
    <footer>
        &copy; 2023 Plant Compendium. All rights reserved. | <a href="privacy.html" className="footer-text" >Privacy Policy</a> | <a href="terms.html" className="footer-text">Terms &amp; Conditions</a>
        <img className="footer-img" src={logo} alt="logo"/>
    </footer>
</>

);

  export default App;