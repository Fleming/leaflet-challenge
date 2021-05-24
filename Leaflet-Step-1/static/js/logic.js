// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson

const link = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson';

// perform a GET request to the query URL
d3.json(link).then((data) => {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
    console.log(data.features);
});

function createMap(earthquakes) {
   
    const satellite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 20,
        id: 'mapbox.satellite',
        accessToken: API_KEY
    });

    const grayscale = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 20,
        id: 'mapbox.light',
        accessToken: API_KEY
    });

    const outdoors = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 20,
        id: 'mapbox.outdoors',
        accessToken: API_KEY
    });

    const baseMap = {
        'Satellite': satellite,
        'Grayscale': grayscale,
        'Outdoors': outdoors
    };

    const overlayMap = {
        Earthquakes: earthquakes
    };