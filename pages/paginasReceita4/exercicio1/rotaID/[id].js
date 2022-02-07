import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function MovieID(){
  const router = useRouter()
  const {id} = router.query
  const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=5d61b462&i=${id}`, fetcher)
  console.log(data)    
  if (error) return <div>falha na requisição...</div>
  if (!data) return <div>carregando...</div>

  return (
    <div id="content">
      Titulo: {data.Title} -- Ano: {data.Year} -- 
      <img src={data.Poster}></img>
    </div>  
  )    
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}