
export default function MovieID_1({data}){
  return (
    <div id="content">
      Titulo: {data.Title} -- Ano: {data.Year} -- 
      <img src={data.Poster}></img>
    </div>  
  )    
}

export async function getServerSideProps(context){
  const res = await fetch(`http://www.omdbapi.com/?apikey=5d61b462&i=${context.params.id_1}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}