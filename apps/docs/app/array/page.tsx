import { CodeBlock, DocumentContainer } from "@repo/ui";

interface CodeExamples {
  text: string;
  code: string;
}

const codeExamples: CodeExamples[] = [
  { text: "How to get the current Date", code: "const now = new Date()" },
  {
    text: "How to check a variable is Array",
    code: "Array.isArray(variable);",
  },
  {
    text: "Create Array from variable",
    code: "const array = Array.from(variable);",
  },
  { text: "Merge two arrays", code: "const newArray = array1.concat(array2);" },
  {
    text: "Remove duplicate from an Array",
    code: "const uniqueArray = [...new Set(array)]",
  },
  {
    text: "Sort in ascending order",
    code: "array.sort((a,b) => a - b)",
  },
  {
    text: "Reverse ans array",
    code: "array.reverse()",
  },
  {
    text: " Convert string to number",
    code: "const number = parseInt(string)",
  },
  {
    text: "Genrate random no. between two numbers",
    code: "const randomnumber: Math.floor(Math.random() * (max - min +1)) + min",
  },
  {
    text: "Checks a string includes substring",
    code: "string.includes(substring)",
  },
  {
    text: "Get the tlenght od an objects",
    code: "Object.keys(object).length",
  },
  {
    text: "Convert object to array",
    code: "const array = Object.entries(object)",
  },
  {
    text: "Get current location",
    code: "const currentUrl = window.location.href",
  },
  {
    text: "Redirect to a url",
    code: "window.location.replace(url)",
  },
  {
    text: "Copy test to clipboard",
    code: "navigator.clipboard.writeText(text)",
  },
];

export default function Home(): JSX.Element {
  return (
<DocumentContainer>
  
<h1 className="typog-h3 max-sm:text-center mb-2 md:mb-5">Arrays</h1>

{codeExamples.map((example, index) => (
  <div className="codeblock mb-2" key={index}>
    <p className="expltext text-gray-900 typog-p3">
      {`${index + 1}. ${example.text}`}
    </p>
    <CodeBlock code={example.code} />
  </div>
))}


</DocumentContainer>

  );
}
