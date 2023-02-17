import './index.css'
import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from './context/navigation';

const el = document.getElementById('root');
const root = reactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
);