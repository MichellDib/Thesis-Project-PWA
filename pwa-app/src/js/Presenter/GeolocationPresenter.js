import React from 'react';

class GeolocationPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { latitude: null, longitude: null };
        this.getLocation = this.getLocation.bind(this);
    }

    getLocation() {
        const startTime = performance.now();

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const endTime = performance.now();
                console.log(`Time to get location: ${endTime - startTime} milliseconds`);
                const { latitude, longitude } = position.coords;
                this.setState({ latitude, longitude });
            },
            (error) => console.log(error)
        );
    }

    render() {
        return (
            <div>
                <button onClick={this.getLocation}>Get Location</button>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longitude}</p>
            </div>
        );
    }
}

export default GeolocationPresenter;
