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
          Esta es la mítica transformación Lucio Chad, una evolución que trasciende la simple apariencia para convertirse en el símbolo máximo de confianza, poder y carisma. Cuando Lucio alcanza esta forma, no solo demuestra su fuerza física, sino también su indomable determinación y la capacidad de inspirar respeto y admiración a su alrededor. En este estado, su presencia domina cualquier entorno, convirtiéndose en la personificación de la grandeza y la excelencia.
          </p>
        </Card>
      </motion.div>
    </div>
  )
}

export default Xd
