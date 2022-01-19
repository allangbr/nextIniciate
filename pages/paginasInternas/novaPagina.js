import Link from 'next/link'
import {Lorem} from "/components/lorem.js"

export default function Principal() {
  return (
    <div>
      <style jsx>{`
        a {
          color: blue;
          text-decoration: none;
          display: flex;
          justify-content: center;
        }
      `}
      </style>

      <h1>Nova Página</h1>
      <MariaPrea texto="Texto componente"/>
      <Lorem />
      <Link href="/">
          <a>Voltar a pagina principal</a>
      </Link>
    </div>
  )
}

export const MariaPrea = ({texto}) => {
  return <h2>{texto}</h2>
}
