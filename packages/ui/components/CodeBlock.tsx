import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string; 
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  return (
    <div className='max-w-2xl '>
    <SyntaxHighlighter language={language} style={darcula} >
      {code}
    </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
