import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router'
import HomePage from './assets/pages/HomePage.jsx'
import Portfolio from './assets/pages/Portfolio.jsx'
import Blog from './assets/pages/Blog.jsx'
import Price from './assets/pages/Price.jsx'

import './assets/scss/index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />} >
          <Route path='/' element={<HomePage />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/price' element={<Price />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
