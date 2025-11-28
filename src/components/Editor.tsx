type EditorProps = {
    value: string;
    onChange: (value: string) => void;
};

export default function Editor({ value, onChange }: EditorProps) {
    return (
        <>
            <textarea
                className='editor'
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder='送信したいメッセージを入力...'
            />
        </>
    );
}