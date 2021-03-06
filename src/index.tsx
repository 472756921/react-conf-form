import '@babel/polyfill'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider, config } from 'react-redux-creator'
import fetch from './utils/fetch'
import routes from './routes'

config({
  fetchMethod: fetch,
  logger: false,
})

ReactDOM.render(
  (<Provider routes={routes} />),
  document.getElementById('app'),
)


