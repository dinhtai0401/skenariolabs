import axios from "axios";
import key from "constants/accessToken.json";
import { connect, getIn } from "formik";
import React, { useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { Button } from "reactstrap";
import "./Coordinate.scss";

function Coordinate(props) {
  const { name, coordinate, onCoordinateChange, onGetCoordinateButtonBlur } =
    props;

  const values = getIn(props.formik.values);

  useEffect(() => {
    async function fetchData() {
      let searchCoordinate = `${values.name} ${values.street} ${values.number} ${values.city} ${values.code} ${values.country} ${values.municipality}`;
      if (searchCoordinate.replace(/\s/g, "").length) {
        await axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchCoordinate}.json?access_token=${key.access_token}`
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
    }
    fetchData();
  }, [values, onCoordinateChange]);

  return (
    <div className="coordinate">
      <div className="coordinate__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onGetCoordinateButtonBlur}
          disabled={true}
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
