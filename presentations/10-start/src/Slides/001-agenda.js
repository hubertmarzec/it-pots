/* SomeSlide.js */
import React from 'react'
import { ContentSlide, Step } from 'react-presents'

const Slide = () => (
   <ContentSlide>
    <h1>{Slide.title}</h1>
    <ul>
      <li>Workspace</li>
      <li>Language</li>
      <li>Code formatting  & naming convensions</li>
      <li>How to debug</li>
      <li>File structure</li>
      <li>Testing</li>
    </ul>
  </ContentSlide>
)

Slide.title = 'Agenda';

export default Slide;

 
