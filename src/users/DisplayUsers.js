import React from "react";

export default function DisplayUsers(props) {
  return (
    <div>
      {props.sendState.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h3>{item.email}</h3>
            <h5>{item.gen}</h5>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
