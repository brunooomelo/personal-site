import Link from 'next/link'
import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { AnchorIcon } from '../../common/AnchorIcon'

const IconProps = {
  size: 48,
  color: '#fff',
}
const HomePage = () => (
  <div className="container">
    <header className="header">
      <Link href="/" locale="en" passHref>
        <motion.a
          initial={{ opacity: 0, y: 100, scale: 1.5 }}
          animate={{ opacity: 0.8, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn-translate"
        >
          en
        </motion.a>
      </Link>
    </header>
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

export default HomePage
