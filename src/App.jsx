import { useState } from 'react'
import { CatPage, CatsPage, NotFoundPage, SearchPage, HomePage } from './pages'
import './App.css'

function App() {


  return (
    <>
      <HomePage />
      <CatsPage />
      <CatPage />
      <NotFoundPage />
      <SearchPage />
    </>
  )
}

export default App
