// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
    const [lat, errorMessage] = useLocation();

    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Spinner message="Please allow location in browser" />;
    }

    return <div className="border red">{content}</div>;
};

  
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));