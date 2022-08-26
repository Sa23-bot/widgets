import React, { useState } from "react";

// Import Components
import DropDown from "./Components/DropDown";
import Translate from "./Components/Translate";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";

// Import Route
import Route from "./Routes/Route";

// Import Navbar
import Header from "./Header/Header";

export default () => {
  const items = [
    {
      title: "what is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  const options = [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ];

  const [selected, setSelected] = useState(options[0]);

  // const showAccordion = () => {
  //   if (window.location.pathname === "/") {
  //     return <Accordion items={items} />;
  //   }
  // };

  // const showList = () => {
  //   if (window.location.pathname === "/list") {
  //     return <Search />;
  //   }
  // };

  // const showDropDown = () => {
  //   if (window.location.pathname === "/dropdown") {
  //     return (
  //       <DropDown
  //         selected={selected}
  //         onSelectedChange={setSelected}
  //         options={options}
  //       />
  //     );
  //   }
  // };

  // const showTranslate = () => {
  //   if (window.location.pathname === "/translate") {
  //     return <Translate />;
  //   }
  // };

  return (
    <div>
      <Header />
      <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <DropDown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      /> */}
      {/* <Translate /> */}
      {/* {showAccordion()} */}
      {/* {showList()}
      {showDropDown()}
      {showTranslate()} */}

      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
