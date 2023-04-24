import React, { useState, useEffect } from 'react';
// import useLights from './hook/useLights'

function PlayerButton(e) {
    const [light, setLight] = useState("");

    function lightUp() {
        setLight(`${e.color}bg`);

        setTimeout(() => {
            setLight("")
        }, 300)
    }

    return (
        <div className={`button ${e.color} ${light}`} onClick={lightUp}></div>
    );
}

export default PlayerButton;