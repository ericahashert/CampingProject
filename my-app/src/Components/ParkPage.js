import React from 'react';

function ParkPage () {
    fetch("https://developer.nps.gov/api/v1/")
        .then(r=>r.json())
        .then(data=>console.log(data))
}
