import React from "react";

const People = (props) => {
  return (
    <div className="col">
      <h3>People: </h3>
      <hr />
      {props.people.map((p) => (
        <div key={Math.random() * 10000000}>
          <p>
            {p.firstName} {p.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};
export default People;
