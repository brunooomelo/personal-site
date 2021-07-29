import { motion } from 'framer-motion'
import Link from 'next/link'

const NotFound = () => (
  <div className="container">
    <div className="content">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 0.5, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        whileHover={{ opacity: 1, scale: 1.3 }}
        className="title"
      >
        Pagina não encontrada
      </motion.h1>
      <motion.div className="container-social">
        <Link href="/" passHref>
          <motion.a
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.5, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            whileHover={{ opacity: 1, scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className="box-social box-solid"
          >
            Voltar
          </motion.a>
        </Link>
      </motion.div>
    </div>
  </div>
)

export default NotFound
