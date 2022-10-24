import { useContext } from "react";

import { MenuPage, MenuWrapper } from "./styles";
import { MoviesAndTv } from "@styled-icons/fluentui-system-filled";
import { GameController } from "@styled-icons/ionicons-solid";
import { GlobalContext } from '../../Contex';

export default function Menu() {
  const { selectedPage, setSelectPage } = useContext(GlobalContext)
  return (
    <MenuWrapper>
      <h2>🤖 Frankie<span>.</span></h2>

      <ul>
        <MenuPage 
          active={selectedPage === 'movies'}
          onClick={() => {setSelectPage('movies')}}
        >
          <MoviesAndTv size={30} />
          Filmes
        </MenuPage>
        <MenuPage 
          active={selectedPage === 'games'}
          onClick={() => {setSelectPage('games')}}
        >
          <GameController size={30} />
          Jogos
        </MenuPage>
      </ul>
    </MenuWrapper>
  )
}