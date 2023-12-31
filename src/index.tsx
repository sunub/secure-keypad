import React, { StrictMode } from "react"
import * as ReactDOM from "react-dom/client";
import "./global.scss";
import App from "./App";
import { server } from "./server/browser"
import { StartOptions } from "msw";

const options: StartOptions = {
	onUnhandledRequest: "bypass"
}

server.start(options);

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)