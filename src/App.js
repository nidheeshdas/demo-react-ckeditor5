import React, { Component } from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import MathType from "@wiris/ckeditor5-mathtype";

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <div className="App">
            <h2>Using CKEditor 5 build in React</h2>
            <CKEditor
              editor={ClassicEditor}
              config={{
                plugins: [MathType],
                toolbar: ["MathType", "ChemType"]
              }}
              data="<p>Hello from CKEditor 5!</p>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
        </div>
      );
}

export default App;
