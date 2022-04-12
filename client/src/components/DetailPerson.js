import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailPerson } from "../actions";
import {
  Card,
  Label,
  List,
  Icon,
  Input,
  Button,
  Image,
} from "semantic-ui-react";
import imgPerson from "../images/avatar/small/person.png";
import { useEffect } from "react";

const DetailPerson = () => {
  const personList = useSelector((state) => state.personList);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailPerson(id));
  }, []);

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
              <Icon name="angle left" />
              All Contacts
            </span>
          </Link>
          <Link to="/update_person">
            <span
              style={{
                float: "right",
                "font-size": "20px",
                "font-weight": "bold",
              }}
            >
              Edit
            </span>
          </Link>
        </Card.Content>
        <List>
          <List.Item>
            {personList.map((person) => {
              return <span>{person.name} asd</span>;
            })}

            <Image src={imgPerson} size="small" circular />
          </List.Item>
        </List>
      </Card>
    </div>
  );
};
export default DetailPerson;
