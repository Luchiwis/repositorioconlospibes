import { Card } from '@nextui-org/react'
import { motion } from 'framer-motion'
import image from '../assets/lucio.jpeg' // Asegúrate de reemplazar con la ruta correcta de tu imagen

function Xd() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-6 max-w-md">
          <h1 className="text-2xl font-bold mb-4">Lucio Chad</h1>
          <img src={image} alt="Imagen Local" className="mb-4" />
          <p>
          Esta es la mítica transformación Lucio Chad, donde un humilde programador se eleva a la cúspide del conocimiento técnico, dominando todos los lenguajes de programación del mundo. En esta forma legendaria de Senior Developer, Lucio no solo escribe código; él moldea la realidad digital a su antojo. Con cada línea de código, despliega una maestría que abarca desde los entresijos de C++ hasta las sutilezas de Python, JavaScript, Rust, y más. Su mente se convierte en un compilador universal, capaz de entender, optimizar y reinventar cualquier algoritmo o estructura de datos. En esta transformación, Lucio Chad no solo resuelve problemas; los anticipa, los desafía, y crea soluciones que otros ni siquiera podrían imaginar.
          </p>
        </Card>
      </motion.div>
    </div>
  )
}

export default Xd
