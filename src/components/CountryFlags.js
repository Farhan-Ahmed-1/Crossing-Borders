import React from 'react'
import { findFlagUrlByIso2Code } from "country-flags-svg";

const CountryFlags = (props) => {
    console.log(props)
    const flagUrl = findFlagUrlByIso2Code(props.code)
  return (
    <div className='h-[250px] w-[250px]'>
        <img src={flagUrl} alt={props} />
    </div>
  )
}

export default CountryFlags