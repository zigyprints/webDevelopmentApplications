import React from 'react'
import "../styles/ControlPannel.css"

export default function ControlPannel() {
    return (
        <div id='ControlPannel'>
            <h1>ControlPannel</h1>
            <div className='Controls-cont'>
                <h2>Position</h2>
                <div id='posControls'>
                    <p>X</p>
                    <p>Y</p>
                    <p>Z</p>
                    <input type='number' step={0.1} id='pos-X' />
                    <input type='number' step={0.1} id='pos-Y' />
                    <input type='number' step={0.1} id='pos-Z' />
                </div>
            </div>
            <div className='Controls-cont'>
                <h2>Scale</h2>
                <div id='sizeControls'>
                    <p>X</p>
                    <p>Y</p>
                    <p>Z</p>
                    <input type='number' step={0.1} id='scale-X' />
                    <input type='number' step={0.1} id='scale-Y' />
                    <input type='number' step={0.1} id='scale-Z' />
                </div>
            </div>
            <div className='Controls-cont'>
                <h2>color & Lighting</h2>
                <div id='col-light-controls'>
                    <p>Ambience Intensity</p>
                    <input type='range' id='ambInt' />
                    <p>Source Intensity</p>
                    <input type='range' id='srcInt' />
                    <p>Color  {" "}</p>
                    <input type='color' id='color' />
                </div>
            </div>
        </div>
    )
}
