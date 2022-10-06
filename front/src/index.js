import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import * as ReactDOMClient from 'react-dom/client'
import { store } from './store'
import './assets/scss/main.scss'
import './assets/css/normalize.css'

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
