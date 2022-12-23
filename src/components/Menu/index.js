import { useContext } from "react";

import { MenuPage, MenuWrapper } from "./styles";
import { MoviesAndTv } from "@styled-icons/fluentui-system-filled";
import { GameController } from "@styled-icons/ionicons-solid";
import { GlobalContext } from '../../contexts/global';

export default function Menu() {
  const { dataType, setDataType } = useContext(GlobalContext)
  return (
    <MenuWrapper>
      <h2>🤖 Frankie<span>.</span></h2>

      <ul>
        <MenuPage 
          active={dataType === 'movies'}
          onClick={() => {setDataType('movies')}}
        >
          <MoviesAndTv size={30} />
          Filmes
        </MenuPage>
        <MenuPage 
          active={dataType === 'games'}
          onClick={() => {setDataType('games')}}
        >
          <GameController size={30} />
          Jogos
        </MenuPage>
      </ul>
    </MenuWrapper>
  )
}