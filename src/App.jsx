import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './ui/Layout';
import { Home } from './pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          {/* Quando você criar o Perfil, basta adicionar aqui: */}
          {/* <Route path="perfil" element={<Perfil />} /> */}

          {/* <Route path="pontos" element={<Pontos />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
