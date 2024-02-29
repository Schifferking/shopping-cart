import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router/Router";
import "./index.css";

async function enableMocking() {
  if (import.meta.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
});
