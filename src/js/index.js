import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Tasks from "./component/Tasks.jsx";

//render your react application
ReactDOM.render(<Tasks />, document.querySelector("#app"));