import React from 'react';
import image from '../math.jpg';
import '../styles/Quote.css';

const Quote = () => (
  <div className="quote-container">
    <p>
      Mathematics is not about numbers, equations, comutations,
      or algorithms: it is about understanding. - Wiliam Paul Thurston
    </p>
    <img src={image} alt="math equations on board" />
  </div>
);

export default Quote;
