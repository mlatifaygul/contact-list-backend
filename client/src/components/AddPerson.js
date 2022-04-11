import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, List, Icon, Input, Button } from "semantic-ui-react";
const AddPerson = () => {
  const style_card = {
    width: "355px",
    height: "635px",
    "border-radius": "30px",
    overflow: "hidden",
    "font-size": "18px",
  };
  const style_input = { "border-bottom": "1px solid #D4D4D4", padding: "5px" };
  return (
    <div className="personList">
      <Card style={style_card}>
        <Card.Content>
          <Link to="/">
            <span
              style={{
                float: "left",
                "font-size": "20px",
                "font-weight": "bold",
              }}
            >
              Cancel
            </span>
          </Link>
          <Link to="/">
            <span
              style={{
                float: "right",
                "font-size": "20px",
                "font-weight": "bold",
              }}
            >
              Done
            </span>
          </Link>
          <Card.Header>New Contact</Card.Header>
        </Card.Content>
        <Card.Content>
          <span
            floated="left"
            size="tiny"
            circular
            style={{
              height: "80px",
              width: "80px",
              "background-color": "#bbb",
              "border-radius": "50%",
              display: "inline-block",
              border: "1px solid #D4D4D4",
              padding: "5px",
              float: "left",
              "padding-top":"14px"
            }}
          >
            <a style={{ "font-weight": "bold" }}>
              add
              <br />
              photo
            </a>
          </span>a
          <div style={{ "margin-left": "95px" }}>
            <Input
              size="large"
              transparent
              placeholder="Search..."
              style={style_input}
            />
            <Input
              size="large"
              transparent
              placeholder="Search..."
              style={style_input}
            />
            <Input
              size="large"
              transparent
              placeholder="Search..."
              style={style_input}
            />
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};
export default AddPerson;
