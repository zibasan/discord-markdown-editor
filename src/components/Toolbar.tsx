type ToolbarProps = {
    onInsert: (text: string) => void;
};

export default function Toolbar({ onInsert }: ToolbarProps) {
    return (
        <>
            <div className="toolbar">
                <button onClick={() => onInsert("**太字**")} title="太字">B</button>
                <button onClick={() => onInsert("*斜体*")} title="イタリック">I</button>
                <button onClick={() => onInsert("__下線__")} title="アンダーライン">U</button>
                <button onClick={() => onInsert("~~取り消し~~")} title="取り消し線">S</button>
                <button onClick={() => onInsert("> 引用\n\n")} title="引用">”</button>
                <button onClick={() => onInsert("```\nコード\n```")} title="コードブロック" className="code-btn"> <img src="./code_75dp_FFFFFF_FILL0_wght600_GRAD0_opsz48.svg" style={{ width: 18, height: 18 }}></img> </button>
            </div>
            <div className="toolbar2">
                <button onClick={() => onInsert("# 見出し1")} title="見出し1">h1</button>
                <button onClick={() => onInsert("## 見出し2")} title="見出し2">h2</button>
                <button onClick={() => onInsert("### 見出し3")} title="アンダーライン">h3</button>
                <button onClick={() => onInsert("- リスト1\n- リスト2\n- リスト3")} title="箇条書き">箇条</button>
                <button onClick={() => onInsert("\n1. \n2. \n3. ")} title="番号付き">1. </button>
                <button onClick={() => onInsert("[リンクタイトル](URL)")} title="リンク">🔗</button>
            </div>
        </>
    );
}
