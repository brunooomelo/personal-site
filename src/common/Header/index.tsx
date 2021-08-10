import Link from 'next/link'
import { motion } from 'framer-motion'
import { DarkModeButton } from '../DarkModeButton'
import { useTheme } from '../../hook/useTheme'

type HeaderProps = {
  href: string
  hrefName: string
  locale: 'en' | 'pt'
}

export function Header({ hrefName, href, locale }: HeaderProps) {
  const { isDark, toggle } = useTheme()
  return (
    <header className="flex justify-center h-14 relative w-full items-center">
      <Link href={href} locale={locale} passHref>
        <motion.a
          initial={{ opacity: 0, y: 100, scale: 1.5 }}
          animate={{ opacity: 0.8, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 z-10"
        >
          {hrefName}
        </motion.a>
      </Link>
      <DarkModeButton isDark={isDark} toggle={toggle} />
    </header>
  )
}
