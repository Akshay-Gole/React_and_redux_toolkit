//  Before creating App.js file 
// // 1) Import the React and ReactDOM libraries
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // 2) Get a reference to the div with ID root(i.e - root element which is present in index.html)
// const el = document.getElementById('root');

// // 3) Tell React to take control of the element
// const root = ReactDOM.createRoot(el);

// // 4) Create a component (Component is a function that returns JSX)
// function App() {
//     return <input placeholder='hi there' />
// }

// // Show the component on the screen
// root.render(<App />);






// After creating App.js file

// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 2) Get a reference to the div with ID root(i.e - root element which is present in index.html)
const el = document.getElementById('root');

// 3) Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// Show the component on the screen
root.render(<App />);
