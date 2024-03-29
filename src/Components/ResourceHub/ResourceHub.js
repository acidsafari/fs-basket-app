import React from 'react';
import Resources from "./Resources";
import Stats from "./Stats";

const ResourceHub = () => {
    return (
        <div className="ResourceHub">
            <h2>Resource Hub</h2>
            <div className='MainAside'>
                <Resources />
                <Stats />
            </div>
        </div>
    );
};

export default ResourceHub;