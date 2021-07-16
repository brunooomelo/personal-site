import Link from 'next/link'

const NotFound = () => (
  <div className="container">
    <h1 className="title">Pagina não encontrada</h1>
    <div className="container-social">
      <Link href="/" passHref>
        <a className="box-social">Voltar</a>
      </Link>
    </div>
  </div>
)

export default NotFound
