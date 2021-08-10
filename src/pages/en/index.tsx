import Link from 'next/link'
import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { AnchorIcon } from '../../common/AnchorIcon'
import { useTheme } from '../../hook/useTheme'
import { DarkModeButton } from '../../common/DarkModeButton'
import { Header } from '../../common/Header'

const IconProps = {
  size: 48,
  color: '#fff',
}
const HomePage = () => {
  return (
    <div className="container">
      <Header hrefName="PT" href="/" locale="pt" />
      <div className="content">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1 }}
        >
          bruno melo
        </motion.div>
        <motion.div
          className="description"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1 }}
        >
          Javascript Developer and other awesome things.
        </motion.div>
        <div className="container-social">
          <AnchorIcon url="https://github.com/brunooomelo" label="Github">
            <SiGithub {...IconProps} />
          </AnchorIcon>

          <AnchorIcon
            url="https://www.linkedin.com/in/brunooomelo"
            label="LinkedIn"
          >
            <SiLinkedin {...IconProps} />
          </AnchorIcon>

          <AnchorIcon url="https://twitter.com/brunooomelo" label="Twitter">
            <SiTwitter {...IconProps} />
          </AnchorIcon>
        </div>
      </div>
    </div>
  )
}

export default HomePage
