/* SomeSlide.js */
import React from 'react'
import { ContentSlide, Step } from 'react-presents'

const Slide = () => (
  <ContentSlide>
    <h1>{Slide.title}</h1>
    <ul>
      <li>OS</li>
      <li>Language interpreter</li>
      <li>Code Editor</li>
      <li>TextEditor</li>
      <Step index={1}><li><u>Virtual Machine (VirtualBox)</u></li></Step>
    </ul>
  </ContentSlide>
)

Slide.title = 'Workspace';

export default Slide;
