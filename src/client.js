import React from 'react';
import { render } from 'react-dom';
import App from './App';
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
