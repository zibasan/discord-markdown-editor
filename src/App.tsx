import React, { useState } from 'react';
import "./styles/discord.css";
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Copy from './components/copy';



function App() {
  const [text, setText] = useState("Hello, World!");

  return (
    <>
      <div className='app'>
        <h1 className='title'>Discord Markdown Editor</h1>

        <div className='container'>
          <div className='left'>
            <h2 className='editor-txt'>送信したいメッセージ | Your Message</h2>
            ※Discordで使用できないMarkdownはプレビューに反映されません。<br></br>* Markdown that cannot be used in Discord will not be reflected in the preview.

            <Toolbar onInsert={(snippet) => setText((prev) => prev + snippet)} />
            <Editor value={text} onChange={setText} />
          </div>

          <div className='right'>
            <h2 className='preview-txt'>プレビュー | Preview</h2>
            <Preview markdown={text} />

            <Copy text={text} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
