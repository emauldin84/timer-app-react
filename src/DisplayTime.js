import React from 'react';

function DisplayTime({time}) {
    return(
        <h3>{(time > 0) ? time : "Time up!"}</h3>
    )

}


export default DisplayTime