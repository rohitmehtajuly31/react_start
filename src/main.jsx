import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap-scss'



const parent=React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"INSIDE ROOT"),React.createElement("h2",{},"INSIDE ROOT 2")
  ])
);
console.log(parent)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {parent}
    
  </React.StrictMode>,
)
