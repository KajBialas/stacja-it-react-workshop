import React from 'react';

function Header(props) {
  const handleLogButton = () => {
    console.log('Logowanie użytkownika');
  };

  return (
    <header>
      <h1>{props.title}</h1>
      <button onClick={handleLogButton}>{props.button}</button>
    </header>
  )
}

export default Header;