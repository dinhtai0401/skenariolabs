import Banner from "components/Banner";
import BuildingForm from "features/Building/components/BuildingForm";
import React from "react";

import "./styles.scss";

function AddEditPage(props) {
  return (
    <div className="add-edit">
      <Banner title="Add new buildings 😎" />

      <div className="add-edit__form">
        <BuildingForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
