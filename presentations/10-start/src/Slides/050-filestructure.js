/* SomeSlide.js */
import React from 'react'
import { ContentSlide, Code } from 'react-presents'

const someCode = `
-rw-r--r--@ average.py
-rw-r--r--@ main.py
-rw-r--r--@ test.py
`

const Slide = () => (
  <ContentSlide>
    <h1>{Slide.title}</h1>
    <ul>
      <li>Separate defition from execution</li>  
    </ul>
     <Code 
        codeMirrorOptions={{mode:'python'}}
        value={someCode}
      />
  </ContentSlide>
)

Slide.title = 'File structure';

export default Slide;
