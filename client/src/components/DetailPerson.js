import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailPerson } from "../actions";
import { Card, List, Icon, Image, Divider, Embed } from "semantic-ui-react";
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
            <List divided selection>
              <List.Item floated="left">
                <List.Content>
                  <List.Description as="a">mobile phone</List.Description>
                  <List.Header as="a">{personDetail.mobile_phone}</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description as="a">home phone</List.Description>
                  <List.Header as="a">{personDetail.phone}</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description as="a">email</List.Description>
                  <List.Header as="a">{personDetail.e_mail}</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  <List.Description as="a">address</List.Description>
                  <List.Header as="a">{personDetail.address}</List.Header>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.96090188943!2d32.62268098021729!3d39.903292277871216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2sid!4v1650589991850!5m2!1sen!2sid"
                    width="240"
                    height="100"
                    frameBorder="0"
                    style={{ border: 0, "margin-top":"20px" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </List.Content>
              </List.Item>
            </List>
          </Card.Content>
        </Card>
      </div>
    </React.Fragment>
  );
};
export default DetailPerson;
