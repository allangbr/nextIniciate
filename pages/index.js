import {Anime} from "../components/anime.js"
import {Filme} from "../components/filme.js"
import {Lorem} from "../components/lorem.js"
import Link from 'next/link'

export default function Home(){
  return (
    <div>
      <style jsx>{`
        nav { 
          display: flex;
          justify-content: space-evenly;
        }
        a {
          color: blue; 
          text-decoration: none;
        }
      `}
      </style>

      <nav>
        <Link href="/paginasInternas/novaPagina">
          <a>Nova Pagina</a>
        </Link>
        <Link href="/2012">
          <a>Movies</a>
        </Link>
        <Link href="/paginasInternas/about">
          <a>Sobre nós</a>
        </Link>
      </nav>
      <h2>
        Viva Santana!
      </h2>
      <Anime />
      <Filme filme="O Auto da Compadecida"/>
      <Lorem />
    </div>
  )
}