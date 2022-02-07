import Link from 'next/link'

export default function Movies2_1({data}){  
    return (
        <ul>
            {data.Search.map( (m, i) => 
               <li key={i}>
                  <Link href={`//paginasReceita4/exercicio3/rotaID1/${m.imdbID}`}><a>{m.Title}</a></Link>
               </li>
            )}
        </ul>
    )    
}

export async function getServerSideProps(context){
  const res = await fetch(`https://www.omdbapi.com/?apikey=5d61b462&s=${context.params.movies2_1}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

