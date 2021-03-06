import React, { useState } from "react";
import Form from "./components/Form";
import People from "./components/People";
import NewPerson from "./components/NewPerson";

const App = () => {
  const [people, setPeople] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <Form addPerson={addPerson} />
        <People people={people} />
        <NewPerson newestPerson={people[people.length - 1]} />
      </div>
    </div>
  );
};

export default App;
