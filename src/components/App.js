import React from "react";
import Postlist from "./Postlist";

const App = () => {
  return (
    <div className="ui container" style={{ padding: "50px" }}>
      <h1> BLOG POSTS </h1>
      <Postlist />
    </div>
  );
};

export default App;
