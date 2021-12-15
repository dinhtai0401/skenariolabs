import React, { useState } from "react";
import { Row, Col, Button } from "reactstrap";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { BsBuilding } from "react-icons/bs";
import BuildingDetail from "../BuildingDetail";

function BuildingList(props) {
  const { buildingList, onBuildingRemoveClick, onBuildingEditClick } = props;

  const [viewport, setViewport] = useState({
    longitude: 25.519993,
    latitude: 65.009272,
    zoom: 12,
  });

  const [showPopup, togglePopup] = useState(false);

  return (
    <ReactMapGL
      width="100%"
      height="100vh"
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiZXJrYW5pc3VmIiwiYSI6ImNrcGZxaHRmNjI0N3UycmxsbWg1Zmt0YXQifQ.tbQo15ubXKR028W_UT5Ibw"
    >
      {buildingList?.map((building) => (
        <div>
          {showPopup && (
            <BuildingDetail building={building} showPopup={showPopup} togglePopup={togglePopup} onRemoveClick={onBuildingRemoveClick} onEditClick={onBuildingEditClick} />
          )}
          <Marker
            latitude={building.coordinate[1]}
            longitude={building.coordinate[0]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Button className="marker-btn" style={{ backgroundColor: "white"}} onClick={() => togglePopup(true)}>
              <BsBuilding style={{ backgroundColor: "black"}} />
            </Button>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default BuildingList;
