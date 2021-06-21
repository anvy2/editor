import styled from "styled-components";

const EditorStyles = styled.div`
  padding: 10px;
  .editor__wrap {
    
    border: 1px solid;
    border-radius: 4px;
  }

  #tab-panel {
    padding-top: 10px;
    span {
      display: inline-block;
      margin: 10px;
      transform: scale(1.5);
    }
  }
  
  #emoji-palette {
    max-width: 300px;
    top: 0 !important;
  }

  #tab-toolbar {
    max-width: 300px;
    ul {
      display: flex;
      justify-content: space-evenly;
    }
  }
  
  .submit__button {
    cursor: pointer;
    margin: 10px 0 0;
    padding: 4px 12px;
    border-radius: 4px;
    border: none;
    outline: none;
    height: 32px;
    background-color: #0f72ee;
    color: #ffffff;
    
    &:hover {
      background-image: linear-gradient(to top, deepskyblue, #0f72ee);
    }
  }
`;
export default EditorStyles;
