import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
