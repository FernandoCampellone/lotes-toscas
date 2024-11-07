import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DataPropietarios from "./DataPropietarios";
import Navbar from "./navbar";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-sa1zcgvu284d0buo.us.auth0.com"
      clientId="hC8CBR25saAmuIrNeqsIUfm94HqI4OiB"
      redirectUri={window.location.origin}
    >
      <Navbar />
      <div className="w-screen">
        <DataPropietarios />
      </div>
    </Auth0Provider>
  </StrictMode>
);
