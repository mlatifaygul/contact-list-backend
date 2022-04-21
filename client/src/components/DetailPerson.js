import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailPerson } from "../actions";
import {
  Card,
  List,
  Icon,
  Image,
  Divider,
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

            <List style={{ margin: "50px 0 0 0" }}>
              <Image
                avatar
                src={imgPerson}
                style={{ width: "120px", height: "120px" }}
              />
              <p style={{ "margin-top": "15px" }}>{personDetail.name}</p>
            </List>
            <Divider hidden />
            <List divided floated="left" selection>
              <p>mobile phone</p>
              <p>{personDetail.mobile_phone}</p>
            </List> <br/>
            <Divider hidden />
            <Divider hidden />
            <List divided floated="left" selection>
              <p>home phone</p>
              <p>{personDetail.phone}</p>
            </List>
          </Card.Content>
        </Card>
      </div>
    </React.Fragment>
  );
};
export default DetailPerson;
