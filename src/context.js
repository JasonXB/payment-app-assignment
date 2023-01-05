import { useState, createContext, useContext } from "react"; // import useContext

// Create custom hook to access state values or edit them across project
const GlobalContext = createContext();
export const useCustomContext = () => useContext(GlobalContext); // export custom hook

export default function GlobalContextProvider(props) {
  // Define state variables and methods that mutate them
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  // Create an object that lets you distriibute all state variables & methods to regular components
  const distribution = { count, increaseCount, decreaseCount };
  return (
    <GlobalContext.Provider value={distribution}>
      {props.children}
    </GlobalContext.Provider>
  );
}
