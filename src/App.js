import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayUsers from './users/DisplayUsers.js';
import FormHook from './users/FormHook.js';

function App() {
  const [persons, setPerson] = useState([
    {
      name: "Carl ",
      email: "Likes to Code",
      gen: "20",
    },
    {
      name: "Andrew",
      email: "likes to party",
      gen: "21",
    },
    {
      name: "Sammy",
      email: "likes to pray",
      gen: 0,
    },
  ]);

  const updateState = (userName, userEmail, userGen) => {
    const newPerson = {
      name: userName,
      email: userEmail,
      gen: userGen,
    };
    setPerson([...persons, newPerson]);
  };
  console.log(persons)
  console.log(persons);
  return (
    <>
      <FormHook receiveState={updateState} />
      <DisplayUsers sendState={persons} />
    </>
  );
}

export default App;

