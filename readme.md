# Realtime Device Tracker

This is a mini project for tracking a device connected to our app in real-time. Similar to online delivery apps where you can see the rider's current location, this app smoothly tracks and displays your location continuously.

## Tech Stack

- Node.js
- Express
- EJS
- Socket.io
- Leaflet
- OpenStreetMap

## Project Workflow

1. **Check for Geolocation Support**: Verify if the browser supports geolocation.
2. **Set Geolocation Options**: Configure options for high accuracy, a 5-second timeout, and no caching.
3. **Track User Location**: Use `watchPosition` to continuously track the user's location.
4. **Emit Location Data**: Emit latitude and longitude via a socket with the event "send-location". Log any errors to the console.
5. **Initialize the Map**: Center the map at coordinates (0,0) with a zoom level of 15 using Leaflet.
6. **Add Map Tiles**: Add OpenStreetMap tiles to the map and create an empty object for markers.
7. **Handle Incoming Location Data**: When receiving location data via the socket, extract the id, latitude, and longitude, and center the map on the new coordinates.
8. **Update or Add Markers**: If a marker for the id exists, update its position. Otherwise, create a new marker at the given coordinates and add it to the map.
9. **Handle User Disconnects**: When a user disconnects, remove their marker from the map and delete it from the markers object.

## Features

1. Real-time tracking of connected devices.
2. Smooth location updates.
3. User-friendly map interface.

## Contributing

Feel free to submit issues or pull requests for improvements and bug fixes.

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Tusharb331/SpotTrack-A-Real-time-Device-Tracker.git
   ```

**Note**: Ensure you have Node.js and npm installed on your machine before running the project.
