import useSWR from 'swr'
import {useState} from 'react'

export default function Movies33(){
  const [state, setState] = useState({url:'', titleSearchString:'', yearSearchString:''})

  const {data, error} = useSWR(state.url, async (u) => {
      if (!state.url || !state.titleSearchString || !state.yearSearchString) return {Search:''}
      if (state.url === '' || state.titleSearchString ==='' || state.yearSearchString ==='') return {Search:''}

      const res = await fetch(`${state.url}/?apiKey=5d61b462&t=${state.titleSearchString}&y=${state.yearSearchString}`)
      const json = await res.json();

      return json;
  })

  const onClickHandler = e => {
      e.preventDefault()
      let title = document.getElementById('titleSearchString').value
      let year = document.getElementById('yearSearchString').value

      if(title.length == 0 || year.length == 0){
        alert("O preenchimento dos campos de busca e ano é obrigatório!")
      } else{ 
        if (state.url === '') {
          setState({url:'https://www.omdbapi.com',titleSearchString:title, yearSearchString:year})
        } else setState({url:'',titleSearchString: state.titleSearchString, yearSearchString: state.yearSearchString})
      }
  }

  return (
      <div>
          <TheForm/>
          <TheLink url={state.url} handler={onClickHandler} />
          <TheMovies data={data ? data: {Search:''} } show={state.url !== ''} />
      </div>
  )
}

export function TheMovies({data,show}){
  console.log(data)
  if (!show) return (<div></div>)

  if (data.Response == "False") return (<div>Não foi encontrado nenhum resultado com a chave inserida!</div>)
  if (data === '' ) return (<div>carregando...</div>)

  return (
    <div>
      {data.Title} --- {data.Year}
      <img src={data.Poster}></img>          
    </div>
  )
}

export function TheLink({url, handler}){
  return (
    <div>
      <a href="/paginasReceita6/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
    </div>
  )
}

export function TheForm(){
  return (
    <div>
      <form>
        <label htmlFor="titleSearchString">Filtro de Título: </label>
        <input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true"/>
        <label htmlFor="yearSearchString">  Filtro de Ano: </label>
        <input id="yearSearchString" name="yearSearchString" type="text" autoComplete="true"/>
      </form>
      <br/>
    </div>
  )
}