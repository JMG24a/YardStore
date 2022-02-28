import React from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

function Map(){

    const styleMap = { 
        "width": "100%", 
        "height": "60vh", 
    }

    return(
        <MapContainer 
            center={[51.505, -0.09]} 
            zoom={14}
            style={styleMap}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>

            </Marker>
        </MapContainer>
    );
}

export {Map}