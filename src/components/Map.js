import { WorldMap } from "react-svg-worldmap";
import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import map from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
import './Map.css'

export default function Map({setCountry,countryData}) {
  const navigate = useNavigate();
  const [showCountry, setShowCountry] = useState("Hover a country on the map");
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryOver = (path) =>{
    setShowCountry(path.target.getAttribute('name'));
    
  }
  const handleCountryClick = (path) =>{
    setSelectedCountry(path.target.getAttribute('id'));
    setCountry(path.target.getAttribute('id').toUpperCase());
    navigate(`/chart`);
    
  }
  return (
    <div className="Map">
      <h3 className="text-yellow-50 flex items-center justify-center">Country : {showCountry}</h3>
      <h1> selected country : {selectedCountry}</h1>
      <SVGMap onLocationMouseOver={handleCountryOver} onLocationClick={handleCountryClick} map={map} />
    </div>
  );
}
