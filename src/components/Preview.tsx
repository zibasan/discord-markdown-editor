import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type PreviewProps = {
    markdown: string;
};

export default function Preview({ markdown }: PreviewProps) {
    return (
        <div className="preview discord-message">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkdown>
        </div>
    );
}
