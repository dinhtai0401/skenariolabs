import axios from "axios";
import { connect, getIn } from "formik";
import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { Button } from "reactstrap";
import "./Coordinate.scss";

function Coordinate(props) {
  const { name, coordinate, onCoordinateChange, onGetCoordinateButtonBlur } =
    props;

  const handleGetCoordinate = async () => {
    const values = getIn(props.formik.values);
    let searchCoordinate = `${values.name} ${values.street} ${values.number} ${values.city} ${values.code} ${values.country} ${values.municipality}`;
    if (
      searchCoordinate.indexOf("undefined") === -1 &&
      searchCoordinate.replace(/\s/g, "").length
    ) {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchCoordinate}.json?access_token=pk.eyJ1IjoiZXJrYW5pc3VmIiwiYSI6ImNrcGZxaHRmNjI0N3UycmxsbWg1Zmt0YXQifQ.tbQo15ubXKR028W_UT5Ibw`
        )
        .then((response) => {
          onCoordinateChange(response.data.features[0].center);
        })
        .catch((error) => {
          return error;
        });
    } else {
      onCoordinateChange("Please insert all input first");
    }
  };

  return (
    <div className="coordinate">
      <div className="coordinate__button">
        <Button
          outline
          name={name}
          color="primary"
          onClick={handleGetCoordinate}
          onBlur={onGetCoordinateButtonBlur}
        >
          <FaSearchLocation /> Get coordinates
        </Button>
      </div>

      <div className="coordinate__display">
        {coordinate && (
          <div>
            {typeof coordinate === "object" &&
            Object.entries(coordinate).length !== 0 ? (
              <div>
                {" "}
                Longtitude: {coordinate[0]} Latitude: {coordinate[1]}{" "}
              </div>
            ) : (
              coordinate
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default connect(Coordinate);
