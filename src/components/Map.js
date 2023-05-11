import { WorldMap } from "react-svg-worldmap";
import React , {useState} from "react";
import map from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
import './Map.css'

export default function Map() {
  const [country, setCountry] = useState("Hover a country on the map");
  return (
    <div className="Map">
      <h3 className="text-yellow-50 flex items-center justify-center">Country : {country}</h3>
      <SVGMap onLocationMouseOver={(e) => setCountry(() => e.target.getAttribute('name'))} map={map} />
    </div>
  );
}
