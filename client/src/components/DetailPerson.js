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
  Segment,
} from "semantic-ui-react";
import imgPerson from "../images/avatar/small/person.png";
import { useEffect } from "react";

const DetailPerson = () => {
  const personDetail = useSelector((state) => state.personDetail);
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
    <React.Fragment>
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
        <List>
            <div>

            <Image src={imgPerson} size="small" circular centered style={{"margin-right":"27px"}}/>
            </div>
            <span>{personDetail.name}</span>
        </List>
        </Card.Content>
      </Card>
    </div>
    </React.Fragment>
  );
};
export default DetailPerson;