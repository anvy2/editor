import "./App.css";
import Editor from "./Editor";
import React from "react";

import { NodeHtmlMarkdown } from 'node-html-markdown'


export interface IProps {}

export interface IState {
  text: string;
}

class App extends React.PureComponent<Readonly<IProps>, IState> {
  readonly #nhm: NodeHtmlMarkdown;
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = { text: "" };
    this.#nhm = new NodeHtmlMarkdown();
  }

  setText = (text: string) => {
    this.setState({ text });
  };

  render() {
    return (
      <div>
        <Editor theme="bubble" setText={this.setText} converter={this.#nhm} />
        <div className="text_html" style={{whiteSpace: 'pre-line'}}>{this.state.text}</div>
      </div>
    );
  }
}

export default App;
