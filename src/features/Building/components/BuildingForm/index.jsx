import CoordinateField from "custom-fields/CoordinateField";
import InputField from "custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup } from "reactstrap";

function BuildingForm(props) {
  const initialValues = {
    name: "",
    street: "",
    number: "",
    code: "",
    city: "",
    municipality: "",
    country: "",
    description: "",
    coordinate: [],
  };
  return (
    <Formik initialValues={initialValues}
    onSubmit={values => console.log('Submit: ', values)}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({values, errors, touched});

        return (
          <Form>
            <FastField
              name="name"
              component={InputField}
              label="Name of the building"
              placeholder="Name of the building"
            ></FastField>
            <FastField
              name="street"
              component={InputField}
              label="Street"
              placeholder="Street"
            ></FastField>
            <FastField
              name="number"
              component={InputField}
              label="Number"
              placeholder="Number"
            ></FastField>
            <FastField
              name="code"
              component={InputField}
              label="Postal code"
              placeholder="Postal code"
            ></FastField>
            <FastField
              name="city"
              component={InputField}
              label="City"
              placeholder="City"
            ></FastField>
            <FastField
              name="municipality"
              component={InputField}
              label="Manicipality"
              placeholder="Manicipality"
            ></FastField>
            <FastField
              name="country"
              component={InputField}
              label="Country"
              placeholder="Country"
            ></FastField>
            <FastField
              name="description"
              component={InputField}
              label="Description"
              placeholder="Description"
              type="textarea"
            ></FastField>
            <FastField
              name="coordinate"
              component={CoordinateField}
              label="Coordinate"
              placeholder="Coordinate"
            ></FastField>
            <FormGroup>
              <Button color="primary" type="submit">Submit</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default BuildingForm;
