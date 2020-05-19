import React, { useEffect } from "react";

const NewPerson = ({ newestPerson }) => {
  useEffect(() => {
    const newestPersonName = `${newestPerson.firstName} ${newestPerson.lastName}`;
    document.title = newestPersonName;
  }, [newestPerson]);

  return (
    <div className="col col-sm-12">
      <h3 className="mt-4 text-center">
        Newest Person: {`${newestPerson.firstName} ${newestPerson.lastName}`}
      </h3>
    </div>
  );
};
export default NewPerson;
