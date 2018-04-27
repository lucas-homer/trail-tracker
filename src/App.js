import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react';
// import child component
import MapContainer from './components/MapContainer';
import Header from './components/Header';




const TrailWidget = (props) => {
  return (
    <div>
      <h2>Trail Name</h2>
      <ul>
        <li>twitter status</li>
        <li>weather info</li>
        <li>links</li>
      </ul>
    </div>
  );
}


const TrailWidgetContainer = (props) => {
  return (
    <div className="col col-4">
        <TrailWidget />
        <TrailWidget />
    </div>
  );
}



class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="row">
          <TrailWidgetContainer />

  
          <MapContainer className="col col-8" google={this.props.google} />
        </div>
      </div>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyCTaLRmBLUAfe9WF_a_7FO5OaAXlpuuEEY',
})(App);
