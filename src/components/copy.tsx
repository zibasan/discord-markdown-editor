import { useState } from 'react';

type Copyprops = {
    text: string;
};

export default function Copy({ text }: Copyprops) {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {

        navigator.clipboard.writeText(text);
        setIsCopied(true);

        // 2秒後にメッセージを消す
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div>
            <button onClick={handleCopy} className='copy-button' disabled={text.trim() === ""}>クリップボードへコピー</button>

            {isCopied && (
                <div style={{ color: "green", marginTop: "8px" }}>
                    ✅️ コピーしました！
                </div>
            )}
        </div>
    )
}