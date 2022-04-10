import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersons } from "../actions";
import { Card, Image, List, Icon, Input, Button } from "semantic-ui-react";
import imgPerson from "../images/avatar/small/person.png";
import { Link } from "react-router-dom";

const PersonList = () => {
  const personList = useSelector((state) => state.personList);
  const dispatch = useDispatch();
  console.log({ personList });

  useEffect(() => {
    dispatch(getPersons());
  }, []);

  return (
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
        >
          <Card.Content>
            <Icon
              name="plus"
              size="large"
              color="blue"
              style={{ float: "right" }}
            />
            <Card.Header>Contacts</Card.Header>
          </Card.Content>
          <Input icon placeholder="Search..." iconPosition="left" size="mini">
            <input style={{ "border-radius": "12px" }} />
            <Icon name="search" />
          </Input>
          <List
            divided
            selection
            verticalAlign="left"
            style={{ overflow: "auto" }}
          >
            {personList.map((person) => {
              return (
                <List.Item style={{ overflow: "hidden" }}>
                  <Image avatar src={imgPerson} />
                  <List.Content>
                    <List.Header>{person.name}</List.Header>
                  </List.Content>
                </List.Item>
              );
            })}
          </List>
        </Card>
      </div>
  );
};
export default PersonList;
