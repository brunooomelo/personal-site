import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { AnchorIcon } from '../../common/AnchorIcon'
import { motion } from 'framer-motion'
import { Header } from '../../common/Header'
import { useTheme } from '../../hook/useTheme'

const IconProps = {
  size: 48,
  color: '#fff',
}
const HomePage = () => {
  const { isDark } = useTheme()
  return (
    <div className="px-4 h-full flex flex-col items-center">
      <Header href="/" hrefName="EN" locale="en" />
      <div className="flex flex-1 justify-center flex-col items-center md:max-w-lg">
        <motion.h1
          className="text-4xl text-gray-600 dark:text-white font-bold uppercase md:text-7xl"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
        >
          bruno melo
        </motion.h1>
        <motion.h2
          className="text-base md:text-xl text-gray-700 dark:text-gray-100 font-normal text-center my-2 uppercase "
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1 }}
        >
          Javascript Developer and other awesome things.
        </motion.h2>
        <div className="flex w-full justify-around my-8">
          <AnchorIcon url="https://github.com/brunooomelo" label="Github">
            <SiGithub
              className="transform md:scale-150"
              {...IconProps}
              color={isDark ? '#FFF' : '#3F3F4C'}
            />
          </AnchorIcon>

          <AnchorIcon
            url="https://www.linkedin.com/in/brunooomelo"
            label="LinkedIn"
          >
            <SiLinkedin
              className="transform md:scale-150"
              {...IconProps}
              color={isDark ? '#FFF' : '#3F3F4C'}
            />
          </AnchorIcon>

          <AnchorIcon url="https://twitter.com/brunooomelo" label="Twitter">
            <SiTwitter
              className="transform md:scale-150"
              {...IconProps}
              color={isDark ? '#FFF' : '#3F3F4C'}
            />
          </AnchorIcon>
        </div>
      </div>
    </div>
  )
}
export default HomePage
