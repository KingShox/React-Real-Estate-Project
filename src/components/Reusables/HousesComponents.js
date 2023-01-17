import React from 'react'
import '../Reusables/HousesComponents.css'

function HouseComponents() {
    return (
    <div id="house-box"className="flex-col">
        <div id='shadow-box' className='flex-col'>
            <div id= "title-box" className="flex-row space2">
                <div className="address">2312 Coffeefeign Lane</div>
                <div className="justify-right full-width"><div className="dollar">$</div><div className="price-90">299,999</div></div>
            </div>
            <div className="flex-col">
                <div id= "title-box" className="flex-row space2">
                    <div className="discount"><div className="explenation">!!</div>&nbsp;House Hunter Special 10% Off&nbsp;<div className="explenation">!!</div></div>
                    <div id= "reduced-price" className="justify-right full-width"><div className="dollar">$</div><div className="price">269,999</div></div>
                </div>
            </div>
            <div className="flex-col">
                <div>City:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;St. Louis</div>
                <div>State: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Missouri</div>
                <div>Zipcode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;63105</div>
                <div>Size:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2,467 sqft</div>
                <div>Posted:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01/01/2023</div>
                <div id= "title-box" className="flex-row">
                    <div className="add-width">Contact:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agent Info</div>
                    <div className="justify-right full-width"><button onclick=""className="button-1" role="button">Details</button></div>  
                </div>  
            </div>
            <img src="https://i.pinimg.com/originals/67/ae/ce/67aecec8e965105cc375bf5414b78cd8.jpg" />
        </div>
    </div> 
    )
}
  
export default HouseComponents