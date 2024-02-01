import React, { useState } from "react";
import data from "../Components/data";
import User from "./User";
import "../Components/userLists.css";

const UserLists = () => {
  const [people, setPeople] = useState(data);
  function handlerAll() {
    setPeople([]);
  }

  function getUserId(id) {
    const filterAll = people.filter((r) => r.id !== id);
    setPeople(filterAll);
  }

  return (
    <div className="container">
      {people.map((p) => (
        <User {...p} getId={getUserId} key={p.id} />
      ))}
      <button className="btn" onClick={handlerAll}>
        Clear All
      </button>
    </div>
  );
};

export default UserLists;
