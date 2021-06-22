import React, { useState } from "react";

const SingleComp = (props) => {
  const [singleUser, setUser] = useState({ ...props.user });

  const handleEdit = (user) => {
    setUser({ ...user, isEditable: true });
    console.log("singleUSer", singleUser);
  };

  const NonEditableUser = (props) => {
    console.log("Inside NonEditable", props.user);
    return (
      <div>
        <span>{props.user.name}</span>
        <span>{props.user.sex}</span>
        <span>{props.user.age}</span>
        <button onClick={() => handleEdit(props.user)}>Edit</button>
      </div>
    );
  };

  const EditableUser = (props) => {
    const [newName, setNewName] = useState("");
    const [newSex, setNewSex] = useState("");
    const [newAge, setNewAge] = useState("");
    const handleNameChange = (e) => {
      console.log("handle name change");
      setNewName(e.target.value);
    };

    const handleSexChange = (e) => {
      console.log("handle sex change");
      setNewSex(e.target.value);
    };

    const handleAgeChange = (e) => {
      console.log("handle age change");
      setNewAge(e.target.value);
    };

    const updateUser = () => {
      const newUser = {
        name: newName,
        sex: newSex,
        age: newAge,
      };
      setUser(newUser);
    };
    return (
      <div>
        <input placeholder={props.user.name} onChange={handleNameChange} />
        <input
          placeholder={props.user.sex}
          onChange={(e) => handleSexChange(e)}
        />
        <input
          placeholder={props.user.age}
          onChange={(e) => handleAgeChange(e)}
        />
        <button onClick={() => updateUser(props.user)}>Update</button>
      </div>
    );
  };

  return (
    <div>
      {singleUser.isEditable ? (
        <EditableUser user={singleUser} />
      ) : (
        <NonEditableUser user={singleUser} />
      )}
    </div>
  );
};

export default SingleComp;
