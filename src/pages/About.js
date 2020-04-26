import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TextSection from '../components/TextSection';
import Counter from '../components/Counter';
import PostDetails from '../components/PostDetails';
import PostList from '../components/PostList';


const TEXTS = {
  TITLE: 'O nas',
  LOGIN_BUTTON_TEXT: 'Zaloguj się',
  TEXT_SECTION1: 'Treść strony 1',
  TEXT_SECTION2: 'Treść strony 2',
  FOOTER: 'Copyright 2020',
};

function About() {
  return (
    <>
      <Header title={TEXTS.TITLE} button={TEXTS.LOGIN_BUTTON_TEXT} />

      <Footer text={TEXTS.FOOTER}/>
    </>
  );
}

export default About;
