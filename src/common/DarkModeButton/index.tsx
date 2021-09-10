import { RiMoonLine, RiSunLine } from 'react-icons/ri'

type IDarkMode = {
  isDark: boolean
  toggle: () => void
}

export function DarkModeButton({ isDark, toggle }: IDarkMode) {
  if (!isDark) {
    return <RiSunLine size={40} onClick={toggle} color="#A5ABB0" />
  }
  return <RiMoonLine size={40} onClick={toggle} color="#A5ABB0" />
}
