import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"

const DetailsPage = ({darkMode}) => {
  const {countrydetails} = useParams()
  const navigate = useNavigate();
  const [singleCountry , setSingleCountry] = useState([])
  useEffect(()=>{
    axios.get(`https://restcountries.com/v3.1/alpha/${countrydetails}`)
    .then(res => setSingleCountry(res.data))
  },[])  
  return (
    <div className={darkMode ? 'details-page-dark' : 'details-page'}>
      <div className='back-button-div' >
      <div onClick={()=> navigate(-1)} className={darkMode ? 'dark-back-button':'back-button'}>
      {darkMode ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="white" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></svg> 
      :
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="black" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></svg>}
        <p className={darkMode ? 'dark-button-p' : 'button-p'}>Back</p>
      </div>
      </div>
      {singleCountry.map(country =>{
        const TopLevelDomain = [country.tld]
    return(
      <div key={country.capital} className='details-main-div'>
      <div className='detailsPage-flag'>
        <img className='details-flag' src={country.flags.png}/>
      </div>
      <div className='details-description-main-div'>
        <div>
        <h2 className={darkMode ? 'details-page-country-dark':'details-page-country'}>{country.name.common}</h2>
        <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Native Name: </span>{country.name.official}</p>
        <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Population: </span>{country.population}</p>
        <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Region: </span>{country.region}</p>
        <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Sub Region: </span>{country.subregion}</p>
        <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Capital: </span>{country.capital}</p>
        <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Top Level Domain: </span>{TopLevelDomain.map(tld => <span>{tld}</span>)}</p>
        </div>            
      </div>
      </div>

    )
  })}
      

    </div>
  )
}

export default DetailsPage