import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import { SubMenuProvider } from "./contextAPI/menuContexts"
import { NavigationProvider } from "./contextAPI/menuContexts"

ReactDOM.render(
  <NavigationProvider>
    <SubMenuProvider>
      <App />
    </SubMenuProvider>
  </NavigationProvider>,
  document.getElementById('root')
);

