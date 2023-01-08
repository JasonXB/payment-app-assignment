import React from "react";

// Hook that executes a function whenever someone clicks outside of a JSX element
// JSX element specified via useRef
export default function useClickOutside(ref, closeTrays) {
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeTrays();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
