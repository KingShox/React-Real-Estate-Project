import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../Reusables/LoadingSpinner';
import HouseComponents from '../Reusables/HousesComponents'
import {FaHome} from 'react-icons/fa';
import '../../CSS/Pages/ForSale.css'
import axios from 'axios';

function ForSale() {

  const [forSaleHouses, setForSaleHouses] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    axios.get("http://localhost:8080/viewHousesForSale")
    .then((response) => {
      setTimeout(() => {
        setForSaleHouses(response.data)
        setIsLoading(false)
      }, 1000)
    })
    .catch((e) => {
      console.log(e)
    })

  }, [])

  const renderContent = () => {

    if(isLoading) {
        return(
          <div className='flex-col center fill-vertical'><LoadingSpinner/></div>
        )
    }else{
      return(
        forSaleHouses.map((house) => {
          return(
             <HouseComponents house={house}/>
          )
        })
       
      )
    }
  }

  return (
    <>
      <div className='center'>
        <div className='intro center'><FaHome className='house-icon'/>&nbsp;Sally's Realestate Co. Homes For Sale </div>
      </div>
      <div id='houses' className='flex-row center'>
        {renderContent()}
      </div>
    </>
  )
}

export default ForSale