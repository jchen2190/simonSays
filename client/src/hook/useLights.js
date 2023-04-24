import React, { useState, useEffect } from 'react';

function useLight() {
    const [lightOn, setLightOn] = useState(false);
    const [currentColor, setCurrentColor] = useState("");

    useEffect(() => {
        setLightOn(true);
    }, [currentColor])

    return (
        [lightOn, currentColor, setCurrentColor]
    );
}

export default useLight;