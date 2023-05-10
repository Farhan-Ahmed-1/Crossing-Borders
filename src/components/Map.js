// import "./styles.css";
import { WorldMap } from "react-svg-worldmap";
import map from "@svg-maps/world";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

export default function Map() {
  return (
    <div className="App">
      <SVGMap onLocationClick={(e) => console.log(e.target.getAttribute('name'))} map={map} />
    </div>
  );
}
