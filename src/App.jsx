import { useState } from 'react'
import { CatPage, CatsPage, NotFoundPage, SearchPage, HomePage } from './pages'
import {Routes, Route} from 'react-router-dom'
import Nav from './layouts/Nav'
import './App.css'

function App() {


  return (
    <>
     <Routes>
        <Route path="" element={<Nav />}>
          <Route index element={<HomePage />} />
          <Route path="/cats">
            <Route index element={<CatsPage />} />
            <Route path=":id" element={<CatPage />} />
          </Route>
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
