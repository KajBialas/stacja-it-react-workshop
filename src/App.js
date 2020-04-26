import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TextSection from './TextSection';
import Counter from './Counter';
import PostDetails from './PostDetails';
import PostList from './PostList';


const TEXTS = {
  TITLE: 'Nagłówek strony',
  LOGIN_BUTTON_TEXT: 'Zaloguj się',
  TEXT_SECTION1: 'Treść strony 1',
  TEXT_SECTION2: 'Treść strony 2',
  FOOTER: 'Copyright 2020',
};

function App() {
  return (
    <>
      <Header title={TEXTS.TITLE} button={TEXTS.LOGIN_BUTTON_TEXT} />
      <TextSection text1={TEXTS.TEXT_SECTION1}/>
      <TextSection text1={TEXTS.TEXT_SECTION2}/>
      <hr/>
      <Counter />
      <hr/>
      <PostDetails />
      <PostList />
      <hr/>
      <Footer text={TEXTS.FOOTER}/>
    </>
  );
}

export default App;
