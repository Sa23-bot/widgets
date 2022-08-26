import React, { useState } from "react";
import Convert from "./Convert";
import DropDown from "./DropDown";

// google api key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Amharic",
    value: "am",
  },
  {
    label: "Tigrinya",
    value: "ti",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label >Enter a Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <DropDown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />

      <hr />
      <br />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
