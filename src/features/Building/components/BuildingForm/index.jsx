import CoordinateField from "custom-fields/CoordinateField";
import InputField from "custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

function BuildingForm(props) {
  const {initialValues, isAddMode} = props;

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    street: Yup.string().required("This field is required"),
    number: Yup.string().required("This field is required"),
    code: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    country: Yup.string().required("This field is required"),
    coordinate: Yup.array().min(1),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const {isSubmitting } = formikProps;

        return (
          <Form>
            <FastField
              name="name"
              component={InputField}
              label="Name of the building"
              placeholder="Name of the building"
            />

            <FastField
              name="street"
              component={InputField}
              label="Street"
              placeholder="Street"
            />

            <FastField
              name="number"
              component={InputField}
              label="Number"
              placeholder="Number"
              type="number"
            />

            <FastField
              name="code"
              component={InputField}
              label="Postal code"
              placeholder="Postal code"
              type="number"
            />

            <FastField
              name="city"
              component={InputField}
              label="City"
              placeholder="City"
            />

            <FastField
              name="municipality"
              component={InputField}
              label="Manicipality"
              placeholder="Manicipality"
            />

            <FastField
              name="country"
              component={InputField}
              label="Country"
              placeholder="Country"
            />

            <FastField
              name="description"
              component={InputField}
              label="Description"
              placeholder="Description"
              type="textarea"
            />

            <FastField
              name="coordinate"
              component={CoordinateField}
              label="Coordinate"
              placeholder="Coordinate"
            />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? "Submit" : "Update your building"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default BuildingForm;
