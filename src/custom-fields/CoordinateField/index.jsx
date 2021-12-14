import Coordinate from "components/Coordinate";
import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

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

        <div className={showError ? "is-invalid" : ""}/>
        <ErrorMessage
          className="invalid-feedback d-block"
          name={name}
          component={FormFeedback}
        />
      </FormGroup>
    </div>
  );
}

export default CoordinateField;
