import useSWR from 'swr'
import {useState} from 'react'
import Link from 'next/link'

export default function Movies3(){
  const [url, setUrl] = useState('')
  const {data, error} = useSWR(url, theFetcher)

  const onClickHandler = (e) => {
    e.preventDefault()

    const key = document.getElementById('movie').value 
    if (url === '') setUrl(`https://www.omdbapi.com/?apikey=5d61b462&s=${key}`)
    else setUrl('')
  }

  return (
    <div>
      <form>
      <input id='movie' type='text'></input>
      <button type='submit' onClick={onClickHandler}>Buscar</button>
      </form>
      <TheMovies data={ error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={url !== ''}/>
    </div>
  )
}

export function TheMovies({data,show}){
  if (!show) return (<div></div>)    
  if (data.error) return (<div>falha na requisição</div>)
  if (data.Search === '' ) return (<div>carregando...</div>)

  return (
    <div>
      { data.Search.map( (m, i) => 
        <div key={i}>
          <Link href={`/paginasReceita5/exercicio2/rotaID/${m.imdbID}`}>
            <a>{m.Title}</a>
          </Link>
        </div> ) }            
    </div>
  )
}

async function theFetcher(url) {
  if (url === null || url === '') return {Search:''}
  const res = await fetch(url);
  const json = await res.json();
  return json;
}