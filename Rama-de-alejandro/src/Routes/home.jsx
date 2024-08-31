import { Button, Card } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAudio } from '../components/AudioContext.jsx'

function Home() {
  const navigate = useNavigate()
  const { togglePlay, isPlaying } = useAudio()

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
            Esta es una página creada con Vite + React, NextUI, Tailwind CSS y Framer Motion. Recomiendo activar la musica primero y después empezar con las transformaciones :)
          </p>
          <Button color="primary" onClick={togglePlay}>
            {isPlaying ? 'Pausar' : 'Reproducir'} Canción
          </Button>
          <Button color="secondary" onClick={() => navigate('/lucio')} className='mt-2'>
            Empezar las transformaciones...
          </Button>
        </Card>
      </motion.div>
    </div>
  )
}

export default Home
