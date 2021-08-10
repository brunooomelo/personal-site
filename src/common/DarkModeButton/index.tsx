import { RiMoonLine, RiSunLine } from 'react-icons/ri'

type IDarkMode = {
  isDark: boolean
  toggle: () => void
}

export function DarkModeButton({ isDark, toggle }: IDarkMode) {
  if (!isDark) {
    return (
      <div onClick={toggle}>
        <RiSunLine size={40} />
      </div>
    )
  }
  return (
    <div onClick={toggle}>
      <RiMoonLine size={40} />
    </div>
  )
}
