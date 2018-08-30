/* SomeSlide.js */
import React from 'react'
import { ContentSlide } from 'react-presents'

const Slide = () => (
  <ContentSlide>
    <h1>{Slide.title}</h1>
    <ul>
      <li><code>print</code></li>
      <li><code>format</code></li>
      <li>python standard loggin module</li>
    </ul>
  </ContentSlide>
)

Slide.title = 'Debug';

export default Slide;
