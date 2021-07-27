import Link from 'next/link'

export default function BlogList() {
  return (
    <div>
      Lista de artigos
      <ul>
        <li>
          <Link href="/blog/primeiro-artigo">Primeiro artigo</Link>
        </li>
      </ul>
    </div>
  )
}
