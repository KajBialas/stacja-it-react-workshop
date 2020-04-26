import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <a href="/">Home Ahref</a>
    </div>
  )
}

export default Menu;