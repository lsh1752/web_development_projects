import React from 'react'
import ReactDOM from 'react-dom/client'
import HEADER from './components/header'
import HOME from './components/home'
import PRODUCT from './components/product'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HEADER />
    <HOME />
    <PRODUCT />
  </React.StrictMode>,
)
