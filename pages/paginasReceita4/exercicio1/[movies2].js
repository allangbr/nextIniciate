import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Movies(){
    const router = useRouter()
    const movie = router.query.movies2
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=5d61b462&s=${movie}`, fetcher)    

    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

    return (
        <ul>
            { data.Search.map( (m, i) => 
               <li key={i}>
                  <Link href={`/paginasReceita4/exercicio1/rotaID/${m.imdbID}`}><a>{m.Title}</a></Link>
               </li>
            )}
        </ul>
    )    
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

