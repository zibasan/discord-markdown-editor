import { useState } from 'react';
import "./styles/discord.css";
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Preview from './components/Preview';



function App() {
  const [text, setText] = useState("Hello, World!");

  return (
    <>
      <div className='app'>
        <h1 className='title'>Discord MarkDown Editor</h1>

        <div className='container'>
          <div className='left'>
            <h2>表示したいテキスト</h2>

            <Toolbar onInsert={(snippet) => setText((prev) => prev + snippet)} />
            <Editor value={text} onChange={setText} />
          </div>

          <div className='right'>
            <h2>プレビュー</h2>
            <Preview markdown={text} />

            <button onClick={() => navigator.clipboard.writeText(text)} className='copy-button'>
              クリップボードへコピー
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
