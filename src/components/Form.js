import React, { useState } from "react";

const Form = (props) => {
  const [person, setPerson] = useState({});

  const onChange = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (person.firstName.trim() === "" || person.lastName.trim() === "") return;

    const newPerson = {
      firstName: person.firstName.trim(),
      lastName: person.lastName.trim(),
    };

    props.addPerson(newPerson);
    setPerson({ firstName: "", lastName: "" });
  };
  return (
    <div className="col">
      <h3>Add a person</h3>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name.."
            value={person.firstName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name.."
            value={person.astName}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
