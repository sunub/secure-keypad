import React, { StrictMode } from "react"
import * as ReactDOM from "react-dom/client";
import "./global.scss";
import App from "./App";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)