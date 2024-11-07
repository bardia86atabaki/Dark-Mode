import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Land from "./Land";
import More from "./More";
import Product from "./Product";
import Section from "./Section";
import Txt from "./Txt";
import Search from "./Search";

function Container() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`${ isDarkMode ? "bg-black text-white" : "bg-white text-black" } min-h-screen`}
    >
      <Section />
      <Txt />
      <Product />
      <More />
      <Search/>
      <Land />
    </div>
  );
}

export default Container;