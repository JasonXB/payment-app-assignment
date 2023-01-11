import { useState, createContext, useContext } from "react"; // import useContext

// Create custom hook to access state values or edit them across project
const GlobalContext = createContext();
export const useCustomContext = () => useContext(GlobalContext); // export custom hook

export default function GlobalContextProvider(props) {
  // Define state variables and methods that mutate them
  const [total, setTotal] = useState(0); // payment modal total value
  const [showModal, setShowModal] = useState(false); // show modal if true
  const toggleModal = () => setShowModal(!showModal);

  // Create an object that lets you distribute all state variables & methods to regular components
  const distribution = { total, setTotal, showModal, toggleModal };
  return (
    <GlobalContext.Provider value={distribution}>
      {props.children}
    </GlobalContext.Provider>
  );
}
