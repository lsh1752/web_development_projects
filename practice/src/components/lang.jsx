import { useState } from "react";
import kor from "../assets/kor.png"
import en from "../assets/en.png"
import "./css/lang.css"

export default function lang() {
  const [ lang, setLang ] = useState(false);

  return(
    <>
      {!lang ? <div id='lanbox'>
        <button id="sol" onClick={() => setLang(true)}>
          <img src={kor} id="kor"/>
          KOR
          </button>
      </div> 
      :
      <div id='Llanbox'>
        <button id="top" onClick={() => setLang(false)}>
          <img src={kor} id="kor"/>
          KOR</button>
        <button id="bot" onClick={() => setLang(false)}>
          <img src={en} id="en"/>
          ENG</button>
      </div> }
    </>
  )
}