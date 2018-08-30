/* SomeSlide.js */
import React from 'react'
import { ContentSlide, Code } from 'react-presents'

const someCode = `
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

logger.debug('some debug info')
logger.debug('extra ifno')
logger.info('Start reading database')
logger.error('Error')

# OUTPUT
# INFO:__main__:Start reading database
# ERROR:__main__:Error
`;

const Slide = () => (
  <ContentSlide>
    <h1>{Slide.title}</h1>
    <p>https://en.wikipedia.org/wiki/Syslog</p>
    <Code 
      codeMirrorOptions={{mode:'python'}}
      value={someCode}
    />
  </ContentSlide>
)

Slide.title = 'Logging module';

export default Slide;
