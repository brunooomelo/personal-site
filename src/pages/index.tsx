import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'

const IconProps = {
  size: 48,
  color: '#fff',
}

const HomePage = () => (
  <div className="container">
    <div className="title">bruno melo</div>
    <div className="description">
      Javascript Developer and other awesome things.
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
)

export default HomePage
