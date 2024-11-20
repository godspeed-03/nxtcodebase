"use client"
import { DocumentContainer } from "@repo/ui"
import { useState } from "react"


let array:Array<number> = [1,2,3,4,5,6]

export default function styles () {
  const [captalise, setCaptalise]=useState(false)

  const hadnleCaptalise = () =>{
    setCaptalise(!captalise);
  }

  console.log(captalise)

return(
  <DocumentContainer>
    <div className="head mb-10">
<h1 className=" typog-h1 text-slate-800 text-center b-5">
    Headings <span className="typog-h3 cursor-pointer" onClick={hadnleCaptalise}> A^</span>
  </h1>
  <h1 className={`typog-h1 text-gray-800 mb-5 ${captalise? 'uppercase' : ''}`}>H1.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-h2 text-gray-800 mb-5">H2.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-h3 text-gray-800 mb-5">H3.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-h4 text-gray-800 mb-5">H4.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-h5 text-gray-800 mb-5">H5.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-h6 text-gray-800 mb-5">H6.The quick brown fox jumps over the lazy dog</h1>
</div>
<div className="head mb-10">
<h1 className=" typog-h1 text-slate-800 text-center b-5">
    Paragraphs
  </h1>
  <h1 className="typog-p1 text-gray-800 mb-5">P1.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-p2 text-gray-800 mb-5">P2.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-p3 text-gray-800 mb-5">P3.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-p4 text-gray-800 mb-5">P4.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-p5 text-gray-800 mb-5">P5.The quick brown fox jumps over the lazy dog</h1>
  <h1 className="typog-p6 text-gray-800 mb-5">P6.The quick brown fox jumps over the lazy dog</h1>
</div>

  
</DocumentContainer>
)
}