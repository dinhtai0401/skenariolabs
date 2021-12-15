import React, { useState } from "react";
import { BsBuilding } from "react-icons/bs";
import ReactMapGL, { Marker } from "react-map-gl";
import { Button } from "reactstrap";
import BuildingDetail from "../BuildingDetail";

function BuildingList(props) {
  const { buildingList, onBuildingRemoveClick, onBuildingEditClick } = props;

  const [viewport, setViewport] = useState({
    longitude: 25.519993,
    latitude: 65.009272,
    zoom: 12,
  });

  const [showPopup, togglePopup] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState(null);

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
        <div key={building.id}>
          {showPopup && (
            <BuildingDetail
              showPopup={showPopup}
              togglePopup={togglePopup}
              onRemoveClick={onBuildingRemoveClick}
              onEditClick={onBuildingEditClick}
              selectedBuilding={selectedBuilding}
              setSelectedBuilding={setSelectedBuilding}
            />
          )}
          <Marker
            key={building.id}
            latitude={building.coordinate[1]}
            longitude={building.coordinate[0]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Button
              className="marker-btn"
              style={{ backgroundColor: "white" }}
              onClick={() => {
                togglePopup(true);
                setSelectedBuilding(building);
              }}
            >
              <BsBuilding style={{ backgroundColor: "black" }} />
            </Button>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default BuildingList;
