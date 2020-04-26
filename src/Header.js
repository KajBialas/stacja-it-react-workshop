import React from 'react';

function Header() {
  const handleLogButton = () => {
    console.log('Logowanie użytkownika');
  };

  return (
    <header>Nagłówek strony
      <button onClick={handleLogButton}>Zaloguj się</button>
    </header>
  )
}

export default Header;