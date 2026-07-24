# Truck Trip Planner - Frontend

The frontend of Truck Trip Planner is built using React, Vite, Tailwind CSS, and Leaflet. It provides an intuitive interface for planning truck routes, visualizing maps, and viewing FMCSA-compliant driver logs.

## Features

* Truck route planning between multiple locations
* Interactive route visualization using Leaflet maps
* Distinct markers for current, pickup, and dropoff locations
* FMCSA Hours of Service (HOS) daily logs
* Graph-style FMCSA log visualization
* Loading indicators during route generation
* Responsive and modern UI
* Error handling for invalid or misspelled locations

## Technologies Used

* React
* Vite
* Tailwind CSS
* React Leaflet
* Axios

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the frontend directory:

```bash
cd frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Project Structure

```text
src/
├── components/
│   ├── FMCSALog.jsx
│   ├── RouteMap.jsx
│   ├── StopsTable.jsx
│   └── TripForm.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
```

## Key Functionality

### Route Generation

Users can provide:

* Current location
* Pickup location
* Dropoff location
* Current cycle hours used

The frontend communicates with the Django REST API to generate optimized routes and retrieve trip details.

### FMCSA Driver Logs

The application displays a 24-hour FMCSA log using a graph-style representation similar to traditional paper logs, making driver status transitions easier to understand.

### Map Visualization

Routes are displayed using OpenStreetMap with:

* Current location marker
* Pickup location marker
* Dropoff location marker
* Polyline representing the complete trip route

## Future Improvements

* Authentication and user accounts
* Trip history management
* Dark mode support
* Real-time traffic integration


