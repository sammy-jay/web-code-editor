import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/material.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";
import { Controlled as ControlledEditorComponent } from "react-codemirror2";

const Editor = ({ language, value, setEditorState }) => {
  const themeArray = ["dracula", "material", "mdn-like", "the-matrix", "night"];
  const [theme, setTheme] = useState("dracula");
  const handleChange = (editor, data, value) => {
    setEditorState(value);
  };

  return (
    <div className="editor-container">
      <div style={{ marginBottom: "10px" }}>
        <label>Choose a theme: </label>
        <select
          name="theme"
          onChange={(el) => {
            setTheme(el.target.value);
          }}
        >
          {themeArray.map((theme) => (
            <option value={theme} key={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>

      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: theme,
        }}
      />
    </div>
  );
};

export default Editor;
