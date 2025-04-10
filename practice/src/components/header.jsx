import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/header.css'
import Logo from '../assets/logo.png'
import bar from '../assets/tm_bar.gif'
import search from '../assets/btn_search.gif'

export default function HEADER() {
  const [ lang, setLang ] = useState(false);

  return(
    <div id="container">
      <div id='top-head'>
        <div id='top-box'>
          <div>
            {!lang ? <div id='lanbox'>
              <button onClick={() => setLang(true)}>KOR</button>
            </div> : <div id='Llanbox'>
              <button onClick={() => setLang(false)}>KOR</button>
              <button onClick={() => setLang(false)}>ENG</button>
            </div> }
          </div>
          <img src="" alt="" id="SImg"/>
          <img src="" alt="" id="SImg"/>
          <img src="" alt="" id="SImg"/>
          <div id='right-button-box'>
            <a href="">HOME</a>
            <img src={bar} alt="" id='bar'/>
            <a href="">SITE MAP</a>
            <img src={bar} alt="" id='bar'/>
            <a href="">CONTACT US</a>
          </div>
        </div>
      </div>
        <img src={bar} alt="" width="100%" height="0.1px"/>
      <div id='low-head'>
        <div id='low-box'>
          <img src={Logo} alt="LOGO" height="88px"/>
          <ul id='ul-box'>
            <a href=""><p>모나미소개</p></a>
            <a href=""><p id='head-low-right'>모나미제품</p></a>
            <a href=""><p>NEWS & VIDEO</p></a>
            <a href=""><p>모나미 미술대회</p></a>
            <a href=""><p>고객지원</p></a>
            <a href=""><p>기업 구매 / 개발</p></a>
            <div id='button-box'>
              <img src={search} alt="serch" />
              <div id='hanberger'>
                <img src={search} alt="hamberger" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}