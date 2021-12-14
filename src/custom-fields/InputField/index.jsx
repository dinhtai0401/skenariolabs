import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, type, label, placeholder, disabled } = props;
  const { name } = field;

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
        />
      </FormGroup>
    </div>
  );
}

export default InputField;
