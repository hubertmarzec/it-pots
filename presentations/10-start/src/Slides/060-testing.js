/* SomeSlide.js */
import React from 'react'
import { ContentSlide, Code } from 'react-presents'

const someCode = `
from average import average

assert(average([1,2,3,4]) == 2.5)
assert(average([1]) == 1)

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

Slide.title = 'Testing';

export default Slide;
