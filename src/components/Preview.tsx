import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type PreviewProps = {
    markdown: string;
};

export default function Preview({ markdown }: PreviewProps) {
    return (
        <div className="preview discord-message">
            <ReactMarkdown remarkPlugins={[remarkGfm]} disallowedElements={["h4", "h5", "h6", "hr", "tt", "big", "small", "sub", "sup", "table", "tr", "th", "td", "caption", "img"]}>
                {markdown}
            </ReactMarkdown>
        </div >
    );
}
