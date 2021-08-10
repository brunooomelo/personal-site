import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { AnchorIcon } from '../common/AnchorIcon'
import { motion } from 'framer-motion'
import { Header } from '../common/Header'

const IconProps = {
  size: 48,
  color: '#fff',
}
const HomePage = () => {
  return (
    <div className="container h-full flex flex-col items-center">
      <Header href="/" hrefName="EN" locale="en" />
      <div className="flex flex-1 justify-center flex-col items-center md:max-w-lg">
        <motion.h1
          className="text-5xl text-gray-900 dark:text-gray-300 font-bold uppercase"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1 }}
        >
          bruno melo
        </motion.h1>
        <motion.h2
          className="text-xs md:text-base text-gray-700 dark:text-gray-300 font-normal text-center my-2 uppercase"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1 }}
        >
          Desenvolvedor Javascript e outras coisas legais.
        </motion.h2>
        <div className="flex w-full justify-around my-8">
          <AnchorIcon url="https://github.com/brunooomelo" label="Github">
            <SiGithub {...IconProps} color={'#3F3F4C'} />
          </AnchorIcon>

          <AnchorIcon
            url="https://www.linkedin.com/in/brunooomelo"
            label="LinkedIn"
          >
            <SiLinkedin {...IconProps} color={'#3F3F4C'} />
          </AnchorIcon>

          <AnchorIcon url="https://twitter.com/brunooomelo" label="Twitter">
            <SiTwitter {...IconProps} color={'#3F3F4C'} />
          </AnchorIcon>
        </div>
      </div>
    </div>
  )
}
export default HomePage
