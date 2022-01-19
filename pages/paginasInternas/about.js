import Link from 'next/link'

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

      <h1>Sobre o Aluno</h1>
      <Info />
      <Link href="/">
          <a>Voltar a pagina principal</a>
      </Link>
    </div>
  )
}

export function Info () {
  return (
    <div>
      <div id="nome">
        <h3>Nome </h3>
        <p>Allan Gabriel Almeida Oliveira</p>
      </div>
      <div id="matricula">
        <h3>Matricula </h3>
        <p>20200013801</p>
      </div>
      <div id="periodo">
        <h3>Período </h3>
        <p>4°</p>
      </div>
    </div>
  )
}