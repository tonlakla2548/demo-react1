import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppClass from './AppClass'
import './index.css'
import Workshop from './workshop/Workshop'
import Hello from './workshop/Hello'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Workshop />
  </React.StrictMode>
)
