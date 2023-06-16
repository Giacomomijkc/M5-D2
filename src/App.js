import './App.css';
import React, {Component} from 'react';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import PrimaryContent from './components/PrimaryContent';
import LatestReleases from './components/LatestReleases';

class App extends Component {
  render(){
    return(
    <>
      <NavigationBar />
      <Jumbotron />
      <PrimaryContent>
        <LatestReleases/>
      </PrimaryContent>
      <Footer />
    </>
    )
  }
}

export default App;
