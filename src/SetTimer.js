import React from 'react'

function SetTimer ({timeValue, handleChange}) {
    return(
        <div className='container'>
            <h3>Set Timer</h3>
            <input
                    value={timeValue}
                    onChange={(e) => {
                        handleChange(e.target.value)
                    }}
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Input time in seconds" 
                />
        </div>
    )

}






export default SetTimer;