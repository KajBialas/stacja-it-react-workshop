import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TextSection from './TextSection';

const TEXT = "Przykładowy napis";

function App() {
  return (
    <>
      <Header />
      <TextSection />
      {TEXT}
      <Footer />
    </>
  );
}

export default App;
