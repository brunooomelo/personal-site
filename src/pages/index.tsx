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
    <div className="container">
      <Header href="/" hrefName="EN" locale="en" />
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
          Desenvolvedor Javascript e outras coisas legais.
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
