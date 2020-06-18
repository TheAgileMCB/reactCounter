import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Class componenets

class App extends React.Component {
  render() {
    return(
    <>
    <Header />
    <Main />
    <Footer />
    </>
    );
  }
}

export default App;
