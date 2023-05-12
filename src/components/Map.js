import { WorldMap } from "react-svg-worldmap";
import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import map from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
import './Map.css'

export default function Map() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("Hover a country on the map");
  const [selectedCountry, setSelectedCountry] = useState("");
  const handleCountryOver = (path) =>{
    setCountry(path.target.getAttribute('name'));
  }
  const handleCountryClick = (path) =>{
    console.log(path.target.getAttribute('id'));
    setSelectedCountry(path.target.getAttribute('id'));
    navigate(`/chart`);
    
  }
  return (
    <div className="Map">
      <h3 className="text-yellow-50 flex items-center justify-center">Country : {country}</h3>
      <h1> selected country : {selectedCountry}</h1>
      <SVGMap onLocationMouseOver={handleCountryOver} onLocationClick={handleCountryClick} map={map} />
    </div>
  );
}
