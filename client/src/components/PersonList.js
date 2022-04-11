import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersons } from "../actions";
import {
  Card,
  Image,
  List,
  Icon,
  Input,
  Button,
  Transition,
} from "semantic-ui-react";
import imgPerson from "../images/avatar/small/person.png";
import { Link } from "react-router-dom";

const PersonList = () => {
  const style_card = {
    width: "355px",
    height: "635px",
    "border-radius": "30px",
    overflow: "hidden",
    "font-size": "20px",
  };
  const personList = useSelector((state) => state.personList);
  const dispatch = useDispatch();
  console.log({ personList });

  useEffect(() => {
    dispatch(getPersons());
  }, []);

  return (
    <div className="personList">
      <Card style={style_card}>
        <Card.Content>
          <Link to="add_person">
            <span
              style={{
                float: "right",
                "font-size": "20px",
                "font-weight": "bold",
              }}
            >
              Add
            </span>
          </Link>
          <Card.Header style={{ "margin-left": "55px" }}>Contacts</Card.Header>
        </Card.Content>
        <Input icon placeholder="Search..." iconPosition="left" size="mini">
          <input
            style={{ "border-radius": "12px", margin: "0 4px", padding: "8px" }}
          />
          <Icon name="search" />
        </Input>
        <Transition.Group
          as={List}
          duration={200}
          divided
          size="mini"
          selection
          verticalAlign="left"
          style={{
            overflow: "auto",
            "font-size": "20px",
          }}
        >
          {personList.map((person) => {
            return (
              <List.Item style={{ overflow: "hidden" }}>
                <Image avatar src={imgPerson} />
                <List.Content>
                  <Link to="update_person">
                    <List.Header style={{ "margin-top": "8px" }}>
                      {person.name}
                    </List.Header>
                  </Link>
                </List.Content>
              </List.Item>
            );
          })}
        </Transition.Group>
      </Card>
    </div>
  );
};
export default PersonList;
