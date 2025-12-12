import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './ui/Layout'
import { Home } from './pages/Home'
import { Perfil } from './pages/Perfil'
import { Pontos } from './pages/Pontos'
import { Modelo } from './pages/Modelo'
import Ranking from './pages/Ranking.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="pontos" element={<Pontos />} />
          <Route path="modelo" element={<Modelo />} />
          <Route path="ranking" element={<Ranking />} />

        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
