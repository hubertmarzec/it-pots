/* SomeSlide.js */
import React from 'react'
import { ContentSlide } from 'react-presents'

const Slide = () => (
  <ContentSlide>
    <h1>{Slide.title}</h1>
    <ul>
      <li>RTFM - <a href="https://www.python.org/dev/peps/pep-0008/">https://www.python.org/dev/peps/pep-0008/</a></li>
    </ul>
  </ContentSlide>
)

Slide.title = 'Code formatting & naming conventions';

export default Slide;
