import { useState, createContext, useContext, useEffect } from "react"; // import useContext

// Create custom hook to access state values or edit them across project
const GlobalContext = createContext();
export const useCustomContext = () => useContext(GlobalContext); // export custom hook

export default function GlobalContextProvider(props) {
  // Define state variables and methods that mutate them
  const [checked, setChecked] = useState({});
  // The array we log when the send payouts button is hit
  const [logList, setLogList] = useState([]);
  const logPayoutsList = () => console.log(logList);

  // Create an object that lets you distribute all state variables & methods to regular components
  const distribution = { checked, setChecked, setLogList, logPayoutsList };
  return (
    <GlobalContext.Provider value={distribution}>
      {props.children}
    </GlobalContext.Provider>
  );
}
