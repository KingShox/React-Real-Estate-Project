import React from 'react'
import '../../CSS/Reusables/HousesComponents.css'

function HouseComponents(props) {
    return (
    <div id="house-box"className="flex-col">
        <div id='shadow-box' className='flex-col'>
            <div id= "title-box" className="flex-row space2">
                <div className="address">{props.house.houseNumber} {props.house.streetName}</div>
                <div className="justify-right full-width"><div className="dollar">$</div><div className="price-90">{props.house.price}</div></div>
            </div>
            <div className="flex-col">
                <div id= "title-box" className="flex-row space2">
                    <div className="discount"><div className="explenation">!!</div>&nbsp;House Hunter Special 10% Off&nbsp;<div className="explenation">!!</div></div>
                    <div id= "reduced-price" className="justify-right full-width"><div className="dollar">$</div><div className="price">discount</div></div>
                </div>
            </div>
            <div className="flex-col">
                <div>City:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.house.city}</div>
                <div>State: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.house.state}</div>
                <div>Zipcode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.house.zipCode}</div>
                <div>Size:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.house.squareFeet} sqft</div>
                <div>Posted:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.house.timeOfListing}</div>
                <div id= "title-box" className="flex-row">
                    <div className="add-width">Contact:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agent Info</div>
                    <div className="justify-right full-width"><button onclick=""className="button-1" role="button">Details</button></div>  
                </div>  
            </div>
            <img src={props.house.picture} />
        </div>
    </div> 
    )
}
  
export default HouseComponents