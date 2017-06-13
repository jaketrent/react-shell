import React from 'react'
import styleable from 'react-styleable'

import css from './app.module.css'

export default styleable(css)(props =>
  <div className={props.css.app}>
    <header>
      <h3>Testing 1-2-3...</h3>
    </header>
  </div>
)
