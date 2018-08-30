import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Presentation, Slide, DropDownNav } from 'react-presents'
const slides = [];
const context = require.context('Slides', false, /\.js$/)
context
  .keys()
  .forEach(key => slides.push(context(key).default));


/* Application.js */
const options = slides
  .map((slide, index) => ({
    label: slide.title,
    value: index
  }))
  .filter((option) => option.label)
export default () => (
  <Presentation>
    {slides.map((Component, index) => (
      <Slide
        component={Component}
        key={index}
      />
    )).concat(
      <DropDownNav
        key='DropDownNav'
        options={options}
      />
    )}
  </Presentation>
)
