import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import "./index.css";
import { Refresh } from "./components/refresh";

function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Refresh onClick={() => setCount(count + 1)} />
      <App key={count} />
    </StrictMode>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
