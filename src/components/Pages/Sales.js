import React from 'react'
import HouseComponents from '../Reusables/HousesComponents'
import {FaBars,FaTimes, FaHome} from 'react-icons/fa';
import '../Pages/Sales.css'

function Sales() {
  return (
    <>
      <div className='center'>
        <div className='intro center'><FaHome className='house-icon'/>&nbsp;Sally's Realestate Co. Homes For Sale </div>
      </div>
      <div id='houses' className='flex-row center'>
        <HouseComponents/>
        <HouseComponents/>
        <HouseComponents/>
        <HouseComponents/>
        <HouseComponents/>
      </div>
    </>
  )
}

export default Sales