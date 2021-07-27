import Link from 'next/link'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'

const IconProps = {
  size: 48,
  color: '#fff',
}

const HomePage = () => (
  <div className="container">
    <header className="header">
      <Link href="/" locale="en">
        <a className="btn-translate">en</a>
      </Link>
    </header>
    <div className="content">
      <div className="title">bruno melo</div>
      <div className="description">
        Desenvolvedor Javascript e outras coisas legais.
      </div>
      <div className="container-social">
        <a
          href="https://github.com/brunooomelo"
          target="_blank"
          className="box-social"
          rel="noreferrer"
          aria-label="Github"
        >
          <SiGithub {...IconProps} />
        </a>
        <a
          href="https://www.linkedin.com/in/brunooomelo/"
          target="_blank"
          className="box-social"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <SiLinkedin {...IconProps} />
        </a>
        <a
          href="https://twitter.com/brunooomelo"
          target="_blank"
          className="box-social"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <SiTwitter {...IconProps} />
        </a>
      </div>
    </div>
  </div>
)

export default HomePage
