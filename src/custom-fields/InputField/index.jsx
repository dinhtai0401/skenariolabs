import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, type, label, placeholder, disabled } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div>
      <FormGroup>
        {label && <Label for={name}>{label}</Label>}

        <Input
          id={name}
          {...field}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          invalid={showError}
        />
      </FormGroup>

      <ErrorMessage
        className="invalid-feedback d-block"
        name={name}
        component={FormFeedback}
      />
    </div>
  );
}

export default InputField;
