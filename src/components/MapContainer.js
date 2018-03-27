import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class MapContainer extends Component {
    state = {
        locations: [
            { name: "Blue River Park", location: {lat: 38.9232322, lng: -94.5831363} },
            { name: "Clinton Lake", location: {lat: 38.9423927, lng: -95.3410419} },
            { name: "Hidden Valley Park", location: {lat: 39.0989844, lng: -94.4894028} },
            { name: "Hodge Park", location: {lat: 39.2541992, lng: -94.5020641} },
            { name: "Kessler Park", location: {lat: 39.1122145, lng: -94.5481682} },
            { name: "Kill Creek Park", location: {lat: 38.9148599, lng: -94.9767674} },
            { name: "Landahl Park", location: {lat: 39.0661124, lng: -94.2341369} },
            { name: "Lawrence River Trail", location: {lat: 38.9728017, lng: -95.2207241} },
            { name: "MoPac Singletrack Park", location: {lat: 38.8340981, lng: -94.3103932} },
            { name: "Perry Lake", location: {lat: 39.1924899, lng: -95.4551577} },
            { name: "Rozarks", location: {lat: 39.0640028, lng: -94.6162079} },
            { name: "Shawnee Mission Park", location: {lat: 38.9880517, lng: -94.8002529} },
            { name: "Smithville Lake", location: {lat: 39.4377587, lng: -94.559215} },
            { name: "St. Joseoph Area Trails", location: {lat: 39.799543, lng: -94.8565468} },
            { name: "Stocksdale Park/Walnut Woods", location: {lat: 39.233413, lng: 94.390007} },
            { name: "Swope Park", location: {lat: 38.9878729, lng: -94.519041} },
            { name: "Wyandotte County Lake", location: {lat: 39.1500519, lng: -94.7916967} }
        ]
    }

    componentDidUpdate() {
        this.loadMap(); // call loadMap function to load the google map
    }

    loadMap() {
        if (this.props && this.props.google) { // checks to make sure that props have been passed
            const {google} = this.props; // sets props equal to google
            const maps = google.maps; // sets maps to google maps props

            const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
            const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

            const mapConfig = Object.assign({}, {
                center: {lat: 39.0903392, lng: -94.5882394}, // sets center of google map to Union Station, KC MO.
                zoom: 9, // sets zoom. Lower numbers are zoomed further out.
                mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
            })

            this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

            this.state.locations.forEach( location => { // iterate through locations saved in state
                const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
                    position: {lat: location.location.lat, lng: location.location.lng}, // sets position of marker to specified location
                    map: this.map, // sets markers to appear on the map from line 35
                    title: location.name // the title of th emarker is set to the name of the location
                    // **POTENTIAL AREA FOR MORE FEATURES - CUSTOMIZE POPUP INFO WINDOWS**
                });
            })

        }
    }



    render() {
        const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
            width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
            height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
        }

        return ( // in our return function you must return a div with ref='map' and style.
            <div ref="map" style={style}>
                loading map...
            </div>
        )   
    }
}