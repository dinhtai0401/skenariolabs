import key from "constants/accessToken.json";
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from "react";
import { BsBuilding } from "react-icons/bs";
import ReactMapGL, { Marker } from "react-map-gl";
import { Button } from "reactstrap";
import BuildingDetail from "../BuildingDetail";
import "./styles.scss";

function BuildingList(props) {
  const { buildingList, onBuildingRemoveClick, onBuildingEditClick } = props;

  const [viewport, setViewport] = useState({
    longitude: 25.519993,
    latitude: 65.009272,
    zoom: 12,
  });

  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <ReactMapGL
      width="100%"
      height="100vh"
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapboxApiAccessToken={key.access_token}
    >
      {buildingList?.map((building) => (
        <div key={building.id}>
          {
            <BuildingDetail
              onRemoveClick={onBuildingRemoveClick}
              onEditClick={onBuildingEditClick}
              selectedBuilding={selectedBuilding}
              setSelectedBuilding={setSelectedBuilding}
            />
          }
          <Marker
            key={building.id}
            latitude={building.coordinate[1]}
            longitude={building.coordinate[0]}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Button
              className="buiding-list__marker-btn"
              onClick={() => setSelectedBuilding(building)}
            >
              <BsBuilding className="buiding-list__icon" />
            </Button>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default BuildingList;
