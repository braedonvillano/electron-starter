import React from 'react';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';
import web from './browser.svg';

const style = {
  fontFamily:"-apple-system, 'Helvetica Neue', sans-serif",
  fontWeight: 900,
  fontSize: 40,
  letterSpacing:'-.04em'
}

function App () {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor()
  }, []);

  return (
    <div style={{width: 400, margin: '0 auto', textAlign: 'center'}}>
      <img src={web} style={{height: 100, width: 100, margin: '0 auto'}} alt=""/>
      <div style={style}>twenty, ya know?</div>
      <div onClick={focusEditor}>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={editorState => setEditorState(editorState)}
        />
      </div>
    </div>
  );
}

ReactDOM.render(<App />,  document.getElementById('root'));
