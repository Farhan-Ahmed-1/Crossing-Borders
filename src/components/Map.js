import { WorldMap } from "react-svg-worldmap";
import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import map from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
import './Map.css'

export default function Map({setCountry,countryData,setFlagUrl}) {
  const navigate = useNavigate();
  const [showCountry, setShowCountry] = useState("Hover a country on the map");
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryOver = (path) =>{
    setShowCountry(path.target.getAttribute('name'));
    
  }
  const handleCountryClick = (path) =>{
    setSelectedCountry(path.target.getAttribute('id'));
    setCountry(path.target.getAttribute('id').toUpperCase());
    // setFlagUrl(path.target.getAttribute('id').toUpperCase());
    navigate(`/chart`);
    
  }
  return (
    <div className="Map-details flex flex-wrap justify-between items-center px-16 pt-5">
      <div>
        <h3 className="text-white font-black flex items-center justify-center bg-yellow-700 p-5 rounded-2xl">Country : <span className=" pl-3">{` ${showCountry}`}</span></h3>
        {/* <h1> selected country : {selectedCountry}</h1> */}
      </div>
      <div className="Map">
        <SVGMap onLocationMouseOver={handleCountryOver} onLocationClick={handleCountryClick} map={map} />
      </div>
    </div>
  );
}
