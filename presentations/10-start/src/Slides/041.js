/* SomeSlide.js */
import React from 'react'
import { ContentSlide, Code } from 'react-presents'


const codeSource = `
print('{0} is {1}'.format('Hubert', 'great'))
#Hubert is great 
`

const Slide = () => (
  <ContentSlide>
    <h1>{Slide.title}</h1>
    <Code 
      codeMirrorOptions={{mode:'python'}}
      value={codeSource}
    />
  </ContentSlide>
)
Slide.title = 'Format';

export default Slide;
