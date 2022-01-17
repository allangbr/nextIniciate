import {Anime} from "./export.js"
import {Filme} from "./export.js"
import {Lorem} from "./lorem.js"


export default function Home(){
  return (
     <div>
        <h2>
          Viva Santana!
        </h2>
        <Anime />
        <Filme />
        <Lorem />
     </div>
  )
}