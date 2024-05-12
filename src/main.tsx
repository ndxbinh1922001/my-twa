import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

// this manifest is used temporarily for development purposes
const manifestUrl =
	"https://github.com/ndxbinh1922001/my-twa/tonconnect-manifest.json";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<TonConnectUIProvider manifestUrl={manifestUrl}>
		<App />
	</TonConnectUIProvider>
);
