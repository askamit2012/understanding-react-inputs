import React, { useState, useEffect } from "react";
import SingleComp from "./SingleComp";

const Prac = () => {
  const users = [
    { name: "Amit", age: 29, sex: "Male", isEditable: false },
    { name: "Nikhil", age: 29, sex: "Male", isEditable: false },
    { name: "Rahul", age: 29, sex: "Male", isEditable: false },
  ];

  return (
    <>
      <h1>React Practice</h1>
      {users.map((user, index) => (
        <SingleComp key={Math.random()} user={user} index={index} />
      ))}
    </>
  );
};

export default Prac;
