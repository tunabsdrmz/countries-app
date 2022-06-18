import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom"
const Home = ({darkMode,countries,setCountries,countriesInputRef,regionRef}) => {

  const navigate = useNavigate();
  
  
  
  function handleCountrySearch(){
    const searchValue = countriesInputRef.current.value
    if(searchValue.trim()){
      axios.get(`https://restcountries.com/v3.1/name/${searchValue}`)
      .then(res => setCountries(res.data))
    }
  }
  function selectRegion(){
    const selectValue = regionRef.current.value
    if(selectValue.trim()){
      axios.get(`https://restcountries.com/v3.1/region/${selectValue}`)
      .then(res => setCountries(res.data))
      if(selectValue === "default"){
        axios.get('https://restcountries.com/v3.1/all')
      .then(res => setCountries(res.data))
      }
    }
  }
  return (
    <div className={darkMode ? 'home-dark-mode' : 'home-main-div'}>
       <div className='input-section'>
        <div className={darkMode ? 'search-dark-mode':'search'}>
       {darkMode ? 
       <svg fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg>
       :
       <svg fill="gray" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg>}
        <input ref={countriesInputRef} onChange={handleCountrySearch} className={darkMode ? 'dark-search-bar':'search-bar'} placeholder='Search for a Country..' type="text"/>
        </div>
         <select ref={regionRef} onChange={selectRegion} className={darkMode? 'dark-select-input' :'select-input'}>
            <option value="default"> Filter by Region </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
         </select> 
        </div> 
        <div className='countries'>
        {countries?.map(country=>{
            return  <div onClick={()=>navigate(`details/${country.ccn3}`)} key={country.name.official} className={darkMode ? 'dark-mode-each-card' : 'each-card'}>
                <img className='flag-img' alt='' src={country.flags.png}/>
                <div className='infos'>
                <h4 className={darkMode ? 'dark-country-name':'country-name'}>{country.name.common}</h4>
                <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Population: </span>{country.population}</p>
                <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Region: </span>{country.region}</p>
                <p className='subtitle-desc'><span className={darkMode ? 'dark-subtitles':'subtitles'}>Capital: </span>{country.capital}</p>
                </div>
                </div>
        })}

        </div>
    </div>
  )
}

export default Home