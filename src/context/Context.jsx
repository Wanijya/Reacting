import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setusers] = useState([
    { id: 0, username: "John", city: "USA" },
    { id: 1, username: "Krishna", city: "INDIA" },
    { id: 2, username: "Jule", city: "COLAMBIA" },
  ]);

  return (
    <UserContext.Provider value={{ users, setusers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default Context;
