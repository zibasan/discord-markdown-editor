import React from "react";

type ToolbarProps = {
    onInsert: (text: string) => void;
};

export default function Toolbar({ onInsert }: ToolbarProps) {
    return (
        <div className="toolbar">
            <button onClick={() => onInsert("**太字**")} title="太字">B</button>
            <button onClick={() => onInsert("*斜体*")} title="イタリック">I</button>
            <button onClick={() => onInsert("__下線__")} title="アンダーライン">U</button>
            <button onClick={() => onInsert("~~取り消し~~")} title="取り消し線">S</button>
            <button onClick={() => onInsert("> 引用\n")} title="引用">”</button>
            <button onClick={() => onInsert("```\nコード\n```")} title="コードブロック">&lt;/&gt;</button>
        </div>
    );
}
