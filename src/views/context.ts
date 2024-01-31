import { createContext } from "react";

export const MyContext = createContext({
  selectedBrand: { id: "", brand: "" },
});
