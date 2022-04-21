import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, List, Icon, Input } from "semantic-ui-react";
const UpdatePerson = () => {
  const { id } = useParams();
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
          <Link to={`/detail_person/:${id}`}>
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
              Update
            </span>
          </Link>
          <Card.Header>Edit Person</Card.Header>

          <div style={{ "margin-top": "40px" }}>
            <span
              floated="left"
              size="tiny"
              circular
              style={{
                height: "60px",
                width: "60px",
                "background-color": "#bbb",
                "border-radius": "50%",
                display: "inline-block",
                border: "1px solid #D4D4D4",
                padding: "5px",
                float: "left",
                "padding-top": "10px",
              }}
            >
              <a>
                <p
                  style={{
                    "font-size": "14px",
                    "font-weight": "bold",
                    "line-height": "1.1em",
                  }}
                >
                  add photo
                </p>
              </a>
            </span>
            <div style={{ "margin-left": "85px" }}>
              <Input
                size="large"
                transparent
                placeholder="First name"
                style={style_input}
              />
              <Input
                size="large"
                transparent
                placeholder="Last name"
                style={style_input}
              />
            </div>
          </div>

          {/* <Label basic>
            <Icon size="big" color="green" name="plus circle" />
            <Input placeholder="phone..." size="big" transparent />
          </Label> */}
          <List
            divided
            floated="left"
            selection
            style={{ "margin-top": "20%" }}
          >
            <Icon size="large" color="green" name="plus circle" />
            <Input
              placeholder="mobile phone"
              size="large"
              transparent
              icon="mobile alternate"
              iconPosition="left"
              style={style_input}
            />
          </List>
          <List divided floated="left" selection>
            <Icon size="large" color="green" name="plus circle" />
            <Input
              placeholder="home phone"
              size="large"
              transparent
              icon="phone"
              iconPosition="left"
              style={style_input}
            />
          </List>
          <List divided floated="left" selection>
            <Icon size="large" color="green" name="plus circle" />
            <Input
              placeholder="email"
              size="large"
              transparent
              icon="mail"
              iconPosition="left"
              style={style_input}
            />
          </List>
          <List divided floated="left" selection>
            <Icon size="large" color="green" name="plus circle" />
            <Input
              placeholder="address"
              size="large"
              transparent
              icon="map"
              iconPosition="left"
              style={style_input}
            />
          </List>

          <List divided selection>
            <Input size="large" transparent style={style_input}>
              <p>
                Ringtone <a>Default</a>
                <Icon name="angle right" />
              </p>
            </Input>
          </List>
        </Card.Content>
      </Card>
    </div>
  );
};
export default UpdatePerson;
