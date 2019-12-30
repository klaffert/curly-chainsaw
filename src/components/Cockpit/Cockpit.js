import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  const toggleBtnRef = useRef(null)

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // HTTP request...
    // Can use useEffect as much as you want
    // Combines componentDidMount and componentDidUpdate in functional components
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    toggleBtnRef.current.click()
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // assignedClasses = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Name:
      </button>
    </div>
  );
};

export default React.memo(cockpit);

// Good idea to use React.memo() for functional components that might not
// have to update with each change in Parent component with it
