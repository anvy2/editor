import React from "react";
import Quill from "quill";
;
import EditorStyles from "./Styles";
// @ts-ignore
import * as Emoji from "quill-emoji";

import { NodeHtmlMarkdown } from "node-html-markdown";


export interface IProps {
  theme: 'bubble' | 'snow';
  setText: (text: string) => void;
  converter?: NodeHtmlMarkdown;
}
export interface IState {}

class Editor extends React.PureComponent<Readonly<IProps>, IState> {
  #quill: any;
  readonly #toolBarOptions: any[][];
  constructor(props: Readonly<IProps>) {
    super(props);
    this.state = {};
    this.#toolBarOptions = [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "code"],
    ]
    if(this.props.theme === 'snow') {
      this.#toolBarOptions.push(["emoji"]);
    }
    Quill.register("modules/emoji", Emoji);
  }

  componentDidMount() {
    this.#quill = new Quill("#editor-container", {
      modules: {
        toolbar: {
          container: this.#toolBarOptions,
          handlers: { emoji: function () {} },
        },
        "emoji-toolbar": this.props.theme === "snow",
        "emoji-textarea": this.props.theme === "bubble",
        "emoji-shortname": true,
      },
      placeholder: "Compose an epic...",
      theme: this.props.theme, // or 'bubble'
    });
  }

  handleSubmit = () => {
    if (this.props.converter) {
      this.props.setText(
        this.props.converter.translate(this.#quill.root.innerHTML)
      );
    } else {
      this.props.setText(this.#quill.root.innerHTML);
    }
  };

  render() {
    return (
      <EditorStyles>
        <div className="editor__wrap">
          <div id="editor-container"></div>
        </div>
        <button className="submit__button" onClick={this.handleSubmit}>
          Submit
        </button>
      </EditorStyles>
    );
  }
}

export default Editor;
