/* SomeSlide.js */
import React from 'react'
import { ContentSlide } from 'react-presents'

const Slide = () => (
  <ContentSlide>
    <h1>{Slide.title}</h1>
    <ul>
      <li>Syntax</li>
      <li>Data types</li>
      <ul>
        <li>string,numbers, floats, list, dictionaries, tuples</li>
      </ul>
      <li>Flow control statements</li>
      <ul>
        <li><code>if</code>, <code>for</code>,<code>while</code></li>
      </ul>
      <li>Functions</li>
      <li>Exceptions</li>
      <li>Importing</li>
      <li>File I/O</li>
    </ul>
  </ContentSlide>
)

Slide.title = 'Language';

export default Slide;
