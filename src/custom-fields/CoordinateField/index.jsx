import Coordinate from "components/Coordinate";
import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function CoordinateField(props) {
  const { field, form, label } = props;
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleCoordinateChange = (coordinate) => {
    form.setFieldValue(name, coordinate);
  };

  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}

        <Coordinate
          name={name}
          coordinate={value}
          onCoordinateChange={handleCoordinateChange}
          onCoordinateButtonBlur={onBlur}
        />
      </FormGroup>
    </div>
  );
}

export default CoordinateField;
