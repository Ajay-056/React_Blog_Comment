import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonText = "Click Me!";
  //   return React.createElement("div", null, "Hello, there!");
  // OR return <div>Hi there!</div>;
  return (
    <div>
      {/* // class is a javascript keyword so we have to use className instead of class */}
      <label className="label" for="name">
        Enter name:
      </label>
      <input type="text" id="name" />
      {/* //The custom styling changes in JSX */}
      <button style={{ backgroundColor: "blue", color: "#000" }}>
        {/* // we can use JS variables inside JSX */}
        {buttonText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
