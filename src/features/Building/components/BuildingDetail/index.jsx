import React from "react";
import { Popup } from "react-map-gl";
import { Button } from "reactstrap";

function BuildingDetail(props) {
  const { building, togglePopup, showPopup, onRemoveClick, onEditClick } =
    props;

  const handleRemoveClick = () => {
    if (onRemoveClick) onRemoveClick(building);
  };

  const handleEditClick = () => {
    if (onRemoveClick) onEditClick(building);
  };

  return (
    <div>
      {showPopup && (
        <Popup
          latitude={65.012369}
          longitude={25.521308}
          closeButton={true}
          closeOnClick={true}
          onClose={() => togglePopup(false)}
          anchor="top-right"
        >
          <div className="photo__actions">
            <div>
              <Button outline size="sm" color="black" onClick={handleEditClick}>
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
        </Popup>
      )}
    </div>
  );
}

export default BuildingDetail;
