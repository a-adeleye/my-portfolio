import React from "react";
import "./App.css";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function App() {
  React.useEffect(() => {
    function toggle() {
      const leftBar = document.querySelector(".left");
      leftBar.classList.toggle("active");
      document.querySelector(".sidebar-toggle-btn2").classList.toggle("hide");
    }

    document
      .querySelector(".sidebar-toggle-btn")
      .addEventListener("click", toggle);
    document
      .querySelector(".sidebar-toggle-btn2")
      .addEventListener("click", toggle);
  });

  return (
    <div className="App">
      <LeftBar />
      <RightBar />
    </div>
  );
}

export default App;
