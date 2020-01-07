import React from "react";
import {placeholder} from './sampleMarkdown'
import "./preview.css";

const getMarkdownText = (input=placeholder) => {
  var rawMarkup = marked(input, { sanitize: true });
  console.log({ __html: rawMarkup });
  return { __html: rawMarkup };
};
const Preview = ({ input }) => {
  return (
    <div className="outer-border">
      <h2>MarkDown Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={!input.length?getMarkdownText(input=placeholder):getMarkdownText(input)} />
    </div>
  );
};

export default Preview;
