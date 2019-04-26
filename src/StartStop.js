import React from 'react'

    
function StartStop({handleClick, status}) {
    console.log({status})
    return (
        <div>
            <button onClick={handleClick}>{{status} ? 'Stop' : 'Start'}</button>
        </div>
    )
}




export default StartStop;