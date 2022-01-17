import {Anime} from "../components/export.js"
import {Filme} from "../components/export.js"
import {Lorem} from "./lorem.js"


export default function Home(){
  return (
    <div>
      <h2>
        Viva Santana!
      </h2>
      <Anime />
      <Filme filme="O Auto da Compadecida"/>
      <Lorem />
    </div>
  )
}