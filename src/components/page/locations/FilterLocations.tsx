'use client'
import React, { ChangeEvent, FC, useState } from 'react';

interface LocationSelectorProps {
    locations: string[];
    onLocationChange: (location: string) => void;
}

const LocationSelector: FC<LocationSelectorProps> = ({ locations, onLocationChange }) => {
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocation(event.target.value);
        onLocationChange(event.target.value);
    };

    // Sort locations so that the selected location is always first
    const sortedLocations = [...locations].sort((a, b) => a === selectedLocation ? -1 : b === selectedLocation ? 1 : 0);

    return (
        <select value={selectedLocation} onChange={handleChange}>
            <option value="">Select a location</option>
            {sortedLocations.map((location, index) => (
                <option key={index} value={location}>
                    {location}
                </option>
            ))}
        </select>
    );
}

export default LocationSelector;