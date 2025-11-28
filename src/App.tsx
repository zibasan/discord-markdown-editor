import { useState, useRef } from 'react';
import "./styles/discord.css";
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Copy from './components/copy';

function App() {
  const [text, setText] = useState("Hello, World!");
  const [hasFile, setHasFile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    setHasFile(true);

    reader.onload = () => {
      const text = reader.result as string;
      setText(text);  // ← textarea に反映
    };

    reader.readAsText(file);
  };

  const clearFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // ← 完全にクリアされる
      setText("");
    }
    setHasFile(false);
  };


  return (
    <>
      <div className='app'>
        <h1 className='title'>Discord Markdown Editor</h1>

        <div className='container'>
          <div className='left'>
            <p><h2 className='file'>ファイルからテキストを読み込む</h2>
              <h2 className='en'>Read Text From Your File </h2>
              ファイルからテキストを読み込んで以下のフィールドに入力できます。<br />
              対応形式：.txt, .md</p>

            <div className='file-input'>
              <input
                className='file-ipt-btn'
                ref={fileInputRef}
                type="file"
                accept=".txt, .md"
                onChange={handleFileLoad}
              />
              {hasFile && <button onClick={clearFile} className='clearbtn'>ファイルをクリア</button>}
            </div>

            <hr></hr>

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
