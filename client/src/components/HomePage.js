import React from "react";

const { default: PersonList } = require("./PersonList");

const HomePage = () => {
  return (
    <div>
      <PersonList />
    </div>
  );
};
export default HomePage;
