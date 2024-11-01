// Recommonded.jsx
import React from 'react';
import './Recommonded.css';
import Buttons from '../components/Buttons';

function Recommonded({ handleClick }) {
  return (
    <div>
      <h2 className="recommonded-title">Recommended</h2>
      <div className="recommonded-flex">
        <button className="btns">All Products</button>
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
}

export default Recommonded;
