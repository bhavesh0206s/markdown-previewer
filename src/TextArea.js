import React from "react";
import "./textarea.css";
import {placeholder} from './sampleMarkdown'

const TextArea = ({ enteredText }) => {
  return (
    <div className="outer-border-textarea">
      <h2>Editor</h2>
      <div id="editor">
        <textarea rows="15" cols="120" onChange={enteredText}>
          {placeholder}
        </textarea>
      </div>
    </div>
  );
};

export default TextArea;
