import { Button, Card } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Xd from './Routes/xd'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Bienvenido a mi rama</h1>
          <p className="mb-4">
            En esta rama utilice las librerias de Next Ui, Tailwind css, Framer Motion y React Dom
          </p>
          <Button color="danger" onClick={() => navigate('/lucio')}>
            Haz clic aquí
          </Button>
        </Card>
      </motion.div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lucio" element={<Xd />} />
    </Routes>
  )
}

export default App
