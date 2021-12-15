import React from "react";
import { Popup } from "react-map-gl";
import { Button } from "reactstrap";
import "./styles.scss";

function BuildingDetail(props) {
  const {
    togglePopup,
    showPopup,
    onRemoveClick,
    onEditClick,
    selectedBuilding,
    setSelectedBuilding,
  } = props;

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(selectedBuilding);
  };

  const handleEditClick = () => {
    if (onRemoveClick) onEditClick(selectedBuilding);
  };

  return (
    <div>
      {showPopup && (
        <Popup
          className="building-detail"
          latitude={selectedBuilding.coordinate[1]}
          longitude={selectedBuilding.coordinate[0]}
          closeButton={true}
          closeOnClick={true}
          onClose={() => {
            togglePopup(false);
            setSelectedBuilding(null);
          }}
          anchor="top-right"
        >
          <div className="building-detail__overlay">
            <p>
              {selectedBuilding.coordinate[0]} {selectedBuilding.coordinate[1]}
            </p>
            <p>Name of the building: {selectedBuilding.name}</p>
            <p>Street: {selectedBuilding.street}</p>
            <p>Number: {selectedBuilding.number}</p>
            <p>Postal code: {selectedBuilding.code}</p>
            <p>City: {selectedBuilding.city}</p>
            <p>Municipality: {selectedBuilding.municipality}</p>
            <p>Country: {selectedBuilding.municipality}</p>
            <p>Description: {selectedBuilding.description}</p>
            <div className="building-detail__actions">
              <div>
                <Button
                  outline
                  size="sm"
                  color="primary"
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
              </div>
              <div>
                <Button
                  outline
                  size="sm"
                  color="danger"
                  onClick={handleRemoveClick}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}

export default BuildingDetail;
