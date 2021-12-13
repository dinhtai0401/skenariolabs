import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function BuildingForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
      </FormGroup>

      <FormGroup>
        <Button color="primary">Add to album</Button>
      </FormGroup>
    </Form>
  );
}

export default BuildingForm;