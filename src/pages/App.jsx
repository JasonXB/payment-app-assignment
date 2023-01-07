import React from "react";
import Checkbox from "../components/Checkbox";
import LayoutBlock from "../components/LayoutBlock";
function App() {
  return (
    <LayoutBlock>
      <Checkbox name="Gy Test" checked={true} />
    </LayoutBlock>
  );
}

export default App;
