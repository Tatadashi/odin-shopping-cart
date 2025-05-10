import { describe, it, vi, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Context } from "../component/routes/Context.jsx";

//not importing/exporting this since only want tests from specific file
const customRender = (ui, { providerProps }) => {
  return render(
    <BrowserRouter>
      <Context.Provider {...providerProps}>{ui}</Context.Provider>
    </BrowserRouter>
  );
};