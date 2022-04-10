import React from "react";
import { Card, Image, List, Icon, Input, Button } from "semantic-ui-react";
const AddPerson = () => {
  return (
    <div>
      Add Person.
      <div className="personList">
        <Card
          style={{
            width: "350px",
            height: "630px",
            "border-bottom": "26px",
            "border-radius": "22px",
            overflow: "hidden",
            "font-size": "18px",
          }}
        ></Card>
      </div>
    </div>
  );
};
export default AddPerson;
