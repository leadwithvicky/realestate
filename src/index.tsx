import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RealEstate } from "./screens/RealEstate/RealEstate";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RealEstate />
  </StrictMode>,
);
