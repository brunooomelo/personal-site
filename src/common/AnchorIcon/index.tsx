import { motion } from 'framer-motion'

interface AnchorProps {
  label: string
  url: string
  children: React.ReactChild
}

export function AnchorIcon({ label, url, children }: AnchorProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 0.5, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      whileHover={{ opacity: 1, scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  )
}
