// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson

const link = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson';

// perform a GET request to the query URL
d3.json(link).then((data) => {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
    console.log(data.features);
});