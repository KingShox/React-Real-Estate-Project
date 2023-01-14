import React from 'react'
import '../Reusables/HousesComponents.css'

function HouseComponents() {
    return (
    <div id="vehicle-box"class="flex-col">
        <div id= "title-box" class="flex-row space2">
            <div class="address">2312 Coffeefeign Lane</div>
            <div class="justify-right full-width"><div class="dollar">$</div><div class="price-90">299,999</div></div>
        </div>
        <div class="flex-col vehicle-info">
            <div id= "title-box" class="flex-row space2">
                <div class="discount"><div class="explenation">!!</div>&nbsp;House Hunter Special 10% Off&nbsp;<div class="explenation">!!</div></div>
                <div id= "reduced-price" class="justify-right full-width"><div class="dollar">$</div><div class="price">269,999</div></div>
            </div>
        </div>
        <div class="flex-col vehicle-info">
            <div>City:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;St. Louis</div>
            <div>State: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Missouri</div>
            <div>Zipcode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;63105</div>
            <div>Size:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2,467 sqft</div>
            <div>Posted:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 01/01/2023</div>
            <div id= "title-box" class="flex-row">
                <div class="add-width">Contact:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agent Info</div>
                <div class="justify-right full-width"><button onclick=""class="button-1" role="button">Details</button></div>  
            </div>  
        </div>
        <img src="https://i.pinimg.com/originals/67/ae/ce/67aecec8e965105cc375bf5414b78cd8.jpg" />
    </div>
    )
}
  
export default HouseComponents